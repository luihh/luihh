import { LASTFM_API_KEY } from 'astro:env/server';
import { LASTFM_USERNAME } from 'astro:env/server';

const BASE_URL = 'https://ws.audioscrobbler.com/2.0';

interface SongData {
  artist: string;
  track: string;
  album: string;
  url: string;
  imageURL: string;
  nowPlaying: boolean;
}

export default async (): Promise<SongData> => {
  const apiCall = await fetch(
    BASE_URL +
      `?method=user.getrecenttracks&user=${LASTFM_USERNAME}&limit=1&api_key=${LASTFM_API_KEY}&format=json`
  );
  const response = await apiCall.json();
  const info = response['recenttracks']['track'][0];

  const artist = info['artist']['#text'];
  const track = info['name'];
  const album = info['album']['#text'];
  const url = info['url'];
  const imageURL = info['image'][3]['#text'];

  const attr = info['@attr'];
  let nowPlaying;

  if (attr && attr['nowplaying']) nowPlaying = true;
  else nowPlaying = false;

  return { artist, track, album, url, imageURL, nowPlaying };
};
