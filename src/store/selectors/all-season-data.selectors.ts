
import { createSelector } from 'reselect';
import { State } from '../../interfaces';
import { BaseSeason } from '@chrisb-dev/seasonal-shared';

const selectAllBasicSeasonDataState = (
  state: State
) => state.allBasicSeasonData;

export const selectIsBasicSeasonDataLoading = createSelector(
  selectAllBasicSeasonDataState,
  (allBasicSeasonData): boolean => allBasicSeasonData.isLoading
);

export const selectAllBasicSeasonData = createSelector(
  selectAllBasicSeasonDataState,
  (allBasicSeasonData): BaseSeason[] | undefined => allBasicSeasonData.data
);
