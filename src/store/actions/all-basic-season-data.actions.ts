import { Action } from 'redux';
import { Season } from '../../interfaces';

export const SET_ALL_BASIC_SEASON_DATA_START =
  'SET_ALL_BASIC_SEASON_DATA_START';
export function setAllBasicSeasonDataStart(): Action {
  return {
    type: SET_ALL_BASIC_SEASON_DATA_START,
  }
}

export interface SetAllBasicSeasonDataSuccess extends Action {
  seasonData: Season[];
}
export const SET_ALL_BASIC_SEASON_DATA_SUCCESS =
  'SET_ALL_BASIC_SEASON_DATA_SUCCESS';
export function setAllBasicSeasonDataSuccess(
  seasonData: Season[]
): SetAllBasicSeasonDataSuccess {
  return {
    seasonData,
    type: SET_ALL_BASIC_SEASON_DATA_SUCCESS,
  }
}
