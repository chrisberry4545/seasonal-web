import {
  SET_FOOD_DATA_START,
  SET_FOOD_DATA_SUCCESS,
  SetFoodDataSuccess
} from '../actions';
import { FoodDataState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): FoodDataState => ({
  data: undefined,
  isLoading: true
});

export function foodDataReducer(
  state = getDefaultState(),
  action: Action
): FoodDataState {
  switch (action.type) {
    case SET_FOOD_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_FOOD_DATA_SUCCESS:
      return {
        ...state,
        data: (action as SetFoodDataSuccess).foodData,
        isLoading: false
      };
    default:
      return state
  }
}
