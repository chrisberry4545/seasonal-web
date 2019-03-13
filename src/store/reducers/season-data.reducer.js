import {
  SET_SEASON_DATA_START,
  SET_SEASON_DATA_SUCCESS
} from '../actions';

const getDefaultState = () => ({
  data: undefined,
  isLoading: true
});

export function seasonDataReducer(state = getDefaultState(), action) {
  switch (action.type) {
    case SET_SEASON_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_SEASON_DATA_SUCCESS:
      return {
        ...state,
        data: action.seasonData,
        isLoading: false
      };
    default:
      return state
  }
}
