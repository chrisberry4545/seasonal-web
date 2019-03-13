
import { createSelector } from 'reselect';
import { State, Season } from '../../interfaces';

const selectAllBasicSeasonDataState = (
  state: State
) => state.allBasicSeasonData;

export const selectIsBasicSeasonDataLoading = createSelector(
  selectAllBasicSeasonDataState,
  (allBasicSeasonData): boolean => allBasicSeasonData.isLoading
);

export const selectAllBasicSeasonData = createSelector(
  selectAllBasicSeasonDataState,
  (allBasicSeasonData): Season[] | undefined => allBasicSeasonData.data
);
