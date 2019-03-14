import { Action } from 'redux';

export const OPEN_MENU = 'OPEN_MENU';
export function openMenu(): Action {
  return {
    type: OPEN_MENU
  };
}

export const CLOSE_MENU = 'CLOSE_MENU';
export function closeMenu(): Action {
  return {
    type: CLOSE_MENU
  };
}

export interface SelectSeason extends Action {
  seasonIndex: number;
}
export const SELECT_SEASON = 'SELECT_SEASON';
export function selectSeason(
  seasonIndex: number,
): SelectSeason {
  return {
    seasonIndex,
    type: SELECT_SEASON
  };
}
