import { createSelector } from 'reselect';
import { State, HydratedSeason, Food } from '../../interfaces';

const selectFoodDataState = (state: State) => state.foodData;

export const selectIsFoodDataLoading = createSelector(
  selectFoodDataState,
  (foodDataState): boolean => foodDataState.isLoading
);

export const selectFoodData = createSelector(
  selectFoodDataState,
  (foodDataState): HydratedSeason | undefined => foodDataState.data
);

export const selectFoodDataFood = createSelector(
  selectFoodData,
  (foodData): Food[] | undefined => foodData && foodData.food
);
