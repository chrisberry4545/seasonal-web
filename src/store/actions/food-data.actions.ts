import { HydratedSeason } from '../../interfaces';
import { Action } from 'redux';

export const SET_FOOD_DATA_START = 'SET_FOOD_DATA_START';
export function setFoodDataStart(): Action {
  return {
    type: SET_FOOD_DATA_START,
  }
}

export interface SetFoodDataSuccess extends Action {
  foodData: HydratedSeason;
}
export const SET_FOOD_DATA_SUCCESS = 'SET_FOOD_DATA_SUCCESS';
export function setFoodDataSuccess(foodData: HydratedSeason): SetFoodDataSuccess {
  return {
    foodData,
    type: SET_FOOD_DATA_SUCCESS,
  }
}
