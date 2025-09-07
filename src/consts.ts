export const CELL_COLORS = {
  TRUE: 'bg-ctp-green text-ctp-green-900',
  FALSE: 'bg-ctp-red text-ctp-red-900',
  ONGOING: 'bg-ctp-yellow text-ctp-yellow-900',
  MAYBE: 'bg-ctp-blue text-ctp-blue-900',
} as const;

export type CompletionStatus = keyof typeof CELL_COLORS;

export const TEXT_COLORS = {
  CYAN: 'text-ctp-sky',
  GREEN: 'text-ctp-green',
  YELLOW: 'text-ctp-yellow',
  RED: 'text-ctp-red',
} as const;

export const RATING_THRESHOLDS = {
  ENJOYMENT: [11, 8, 5],
  WORST_FAIL: [80, 60],
} as const;

export const TIER_COLORS = {
  Beginner: 'text-blue-400',
  Easy: 'text-cyan-200',
  Medium: 'text-green-300',
  Hard: 'text-yellow-200',
  'Very Hard': 'text-yellow-500',
  Insane: 'text-red-500',
  Extreme: 'text-purple-400',
  Remorseless: 'text-violet-500',
  Relentless: 'text-violet-300',
  Terrifying: 'text-pink-200',
  Catastrophic: 'text-rose-400',
} as const;

export type TierColorKey = keyof typeof TIER_COLORS;
