import { createSelector } from 'reselect';

const selectFoodDataState = (state) => state.foodData;

export const selectIsFoodDataLoading = createSelector(
  selectFoodDataState,
  (foodDataState) => foodDataState.isLoading
);

export const selectFoodData = createSelector(
  selectFoodDataState,
  (foodDataState) => foodDataState.data
);

export const selectFoodDataFood = createSelector(
  selectFoodData,
  (foodData) => foodData && foodData.food
);
