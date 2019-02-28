export const SET_FOOD_DATA_START = 'SET_FOOD_DATA_START';
export function setFoodDataStart() {
  return {
    type: SET_FOOD_DATA_START,
  }
}

export const SET_FOOD_DATA_SUCCESS = 'SET_FOOD_DATA_SUCCESS';
export function setFoodDataSuccess(foodData) {
  return {
    foodData,
    type: SET_FOOD_DATA_SUCCESS,
  }
}
