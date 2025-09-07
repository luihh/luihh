import {
  CELL_COLORS,
  RATING_THRESHOLDS,
  TEXT_COLORS,
  TIER_COLORS,
} from '../consts';

import type { CompletionStatus, TierColorKey } from '../consts';

export const getCellColor = (value: CompletionStatus): string =>
  CELL_COLORS[value as CompletionStatus] || '';

export const getTierColor = (value: TierColorKey): string =>
  TIER_COLORS[value as TierColorKey] || '';

export const getEnjoymentColor = (value: string): string => {
  const ratingNumber = parseInt(value.split('/')[0]);
  if (!isNaN(ratingNumber)) {
    const thresholds = RATING_THRESHOLDS.ENJOYMENT;
    if (ratingNumber >= thresholds[0]) return TEXT_COLORS.CYAN;
    else if (ratingNumber >= thresholds[1]) return TEXT_COLORS.GREEN;
    else if (ratingNumber >= thresholds[2]) return TEXT_COLORS.YELLOW;
    else return TEXT_COLORS.RED;
  }
  return '';
};

export const getWorstFailColor = (value: string): string => {
  const worstFailNumber = parseInt(value.split('%')[0]);
  if (!isNaN(worstFailNumber)) {
    const thresholds = RATING_THRESHOLDS.WORST_FAIL;
    if (worstFailNumber >= thresholds[0]) return TEXT_COLORS.RED;
    else if (worstFailNumber >= thresholds[1]) return TEXT_COLORS.YELLOW;
    else return TEXT_COLORS.GREEN;
  }
  return '';
};
