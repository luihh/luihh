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
  Beginner: 'text-ctp-blue-400',
  Easy: 'text-ctp-cyan-200',
  Medium: 'text-ctp-green-300',
  Hard: 'text-ctp-yellow-200',
  'Very Hard': 'text-ctp-yellow-500',
  Insane: 'text-ctp-red-500',
  Extreme: 'text-ctp-purple-400',
  Remorseless: 'text-ctp-violet-500',
  Relentless: 'text-ctp-violet-300',
  Terrifying: 'text-ctp-pink-200',
  Catastrophic: 'text-ctp-rose-400',
} as const;

export type TierColorKey = keyof typeof TIER_COLORS;
