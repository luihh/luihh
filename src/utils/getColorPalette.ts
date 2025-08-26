import { Vibrant } from 'node-vibrant/node';

export default async (img: string) => {
  const palette = await Vibrant.from(img).getPalette();
  return palette;
};
