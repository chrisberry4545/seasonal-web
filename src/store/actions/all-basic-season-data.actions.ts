import { Action } from 'redux';
import { BaseSeason } from '@chrisb-dev/seasonal-shared';

export const SET_ALL_BASIC_SEASON_DATA_START =
  'SET_ALL_BASIC_SEASON_DATA_START';
export function setAllBasicSeasonDataStart(): Action {
  return {
    type: SET_ALL_BASIC_SEASON_DATA_START,
  }
}

export interface SetAllBasicSeasonDataSuccess extends Action {
  seasonData: BaseSeason[];
}
export const SET_ALL_BASIC_SEASON_DATA_SUCCESS =
  'SET_ALL_BASIC_SEASON_DATA_SUCCESS';
export function setAllBasicSeasonDataSuccess(
  seasonData: BaseSeason[]
): SetAllBasicSeasonDataSuccess {
  return {
    seasonData,
    type: SET_ALL_BASIC_SEASON_DATA_SUCCESS,
  }
}
