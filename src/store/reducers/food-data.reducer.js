import {
  SET_FOOD_DATA_START,
  SET_FOOD_DATA_SUCCESS
} from '../actions';

const getDefaultState = () => ({
  data: undefined,
  isLoading: true
});

export function foodDataReducer(state = getDefaultState(), action) {
  switch (action.type) {
    case SET_FOOD_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_FOOD_DATA_SUCCESS:
      return {
        ...state,
        data: action.foodData,
        isLoading: false
      };
    default:
      return state
  }
}
