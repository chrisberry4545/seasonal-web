import { createSelector } from 'reselect';
import {
  State,
  HydratedSeason,
  Food,
  Recipe
} from '../../interfaces';

const selectCurrentSeasonDataState = (state: State) => state.currentSeasonData;

export const selectIsCurrentSeasonLoading = createSelector(
  selectCurrentSeasonDataState,
  (currentSeasonData): boolean => currentSeasonData.isLoading
);

export const selectCurrentSeason = createSelector(
  selectCurrentSeasonDataState,
  (currentSeasonData): HydratedSeason | undefined => currentSeasonData.data
);

export const selectCurrentSeasonFood = createSelector(
  selectCurrentSeason,
  (currentSeason): Food[] | undefined => currentSeason && currentSeason.food
);

export const selectCurrentSeasonRecipes = createSelector(
  selectCurrentSeason,
  (currentSeason): Recipe[] | undefined => currentSeason &&
    currentSeason.recipes
);

export const selectCurrentSeasonIndex = createSelector(
  selectCurrentSeasonDataState,
  (currentSeasonData) => currentSeasonData.currentSeasonIndex,
);
