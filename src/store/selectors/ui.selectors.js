import { createSelector } from 'reselect';

const selectUiState = (state) => state.ui;

export const selectIsMenuOpen = createSelector(
  selectUiState,
  (uiState) => uiState.isMenuOpen
);
