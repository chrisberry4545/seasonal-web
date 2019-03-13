import { Action } from 'redux';
import { Season } from '../../interfaces';

export const SET_SEASON_DATA_START = 'SET_SEASON_DATA_START';
export function setSeasonDataStart(): Action {
  return {
    type: SET_SEASON_DATA_START,
  }
}

export interface SetSeasonDataSuccess extends Action {
  seasonData: Season[];
}
export const SET_SEASON_DATA_SUCCESS = 'SET_SEASON_DATA_SUCCESS';
export function setSeasonDataSuccess(
  seasonData: Season[]
): SetSeasonDataSuccess {
  return {
    seasonData,
    type: SET_SEASON_DATA_SUCCESS,
  }
}
