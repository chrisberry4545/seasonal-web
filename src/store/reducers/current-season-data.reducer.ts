import {
  SET_CURRENT_SEASON_DATA_START,
  SET_CURRENT_SEASON_DATA_SUCCESS,
  SetCurrentSeasonDataSuccess
} from '../actions';
import { CurrentSeasonDataState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): CurrentSeasonDataState => ({
  data: undefined,
  isLoading: true
});

export function currentSeasonDataReducer(
  state = getDefaultState(),
  action: Action
): CurrentSeasonDataState {
  switch (action.type) {
    case SET_CURRENT_SEASON_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_CURRENT_SEASON_DATA_SUCCESS:
      return {
        ...state,
        data: (action as SetCurrentSeasonDataSuccess).currentSeasonData,
        isLoading: false
      };
    default:
      return state
  }
}
