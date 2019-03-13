import {
  SET_ALL_BASIC_SEASON_DATA_START,
  SET_ALL_BASIC_SEASON_DATA_SUCCESS,
  SetAllBasicSeasonDataSuccess
} from '../actions';
import { SeasonDataState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): SeasonDataState => ({
  data: undefined,
  isLoading: true
});

export function allBasicSeasonDataReducer(
  state = getDefaultState(),
  action: Action
): SeasonDataState {
  switch (action.type) {
    case SET_ALL_BASIC_SEASON_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_ALL_BASIC_SEASON_DATA_SUCCESS:
      return {
        ...state,
        data: (action as SetAllBasicSeasonDataSuccess).seasonData,
        isLoading: false
      };
    default:
      return state
  }
}
