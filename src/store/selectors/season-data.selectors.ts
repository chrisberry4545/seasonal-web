
import { createSelector } from 'reselect';
import { State, Season } from '../../interfaces';

const selectSeasonDataState = (state: State) => state.seasonData;

export const selectIsSeasonDataLoading = createSelector(
  selectSeasonDataState,
  (seasonDataState): boolean => seasonDataState.isLoading
);

export const selectAllSeasonData = createSelector(
  selectSeasonDataState,
  (seasonDataState): Season[] | undefined => seasonDataState.data
);
