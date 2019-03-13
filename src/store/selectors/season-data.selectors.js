
import { createSelector } from 'reselect';

const selectSeasonDataState = (state) => state.seasonData;

export const selectIsSeasonDataLoading = createSelector(
  selectSeasonDataState,
  (seasonDataState) => seasonDataState.isLoading
);

export const selectAllSeasonData = createSelector(
  selectSeasonDataState,
  (seasonDataState) => seasonDataState.data
);
