import { HydratedSeason } from '@chrisb-dev/seasonal-shared';
import { Action } from 'redux';

export const SET_CURRENT_SEASON_DATA_START = 'SET_CURRENT_SEASON_DATA_START';
export function setCurrentSeasonDataStart(): Action {
  return {
    type: SET_CURRENT_SEASON_DATA_START,
  }
}

export interface SetCurrentSeasonDataSuccess extends Action {
  currentSeasonData: HydratedSeason;
}
export const SET_CURRENT_SEASON_DATA_SUCCESS =
  'SET_CURRENT_SEASON_DATA_SUCCESS';
export function setCurrentSeasonDataSuccess(
  currentSeasonData: HydratedSeason
): SetCurrentSeasonDataSuccess {
  return {
    currentSeasonData,
    type: SET_CURRENT_SEASON_DATA_SUCCESS,
  }
}
