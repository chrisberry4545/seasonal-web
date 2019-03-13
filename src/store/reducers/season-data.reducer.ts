import {
  SET_SEASON_DATA_START,
  SET_SEASON_DATA_SUCCESS,
  SetSeasonDataSuccess
} from '../actions';
import { SeasonDataState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): SeasonDataState => ({
  data: undefined,
  isLoading: true
});

export function seasonDataReducer(
  state = getDefaultState(),
  action: Action
): SeasonDataState {
  switch (action.type) {
    case SET_SEASON_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_SEASON_DATA_SUCCESS:
      return {
        ...state,
        data: (action as SetSeasonDataSuccess).seasonData,
        isLoading: false
      };
    default:
      return state
  }
}
