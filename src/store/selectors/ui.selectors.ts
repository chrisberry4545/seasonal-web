import { createSelector } from 'reselect';
import { State } from '../../interfaces';

const selectUiState = (state: State) => state.ui;

export const selectIsMenuOpen = createSelector(
  selectUiState,
  (uiState): boolean => uiState.isMenuOpen
);
