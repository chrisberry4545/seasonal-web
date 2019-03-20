import { createSelector } from 'reselect';
import { IState } from '../../interfaces';
import { TABS } from '../../const';

const selectUiState = (state: IState) => state.ui;

export const selectIsMenuOpen = createSelector(
  selectUiState,
  (uiState): boolean => uiState.isMenuOpen
);

export const selectCurrentTab = createSelector(
  selectUiState,
  (uiState): TABS => uiState.currentTab
);

export const selectIsCurrentTabFood = createSelector(
  selectCurrentTab,
  (currentTab): boolean => currentTab === TABS.FOOD
);

export const selectIsCurrentTabRecipes = createSelector(
  selectCurrentTab,
  (currentTab): boolean => currentTab === TABS.RECIPES
);

export const selectCurrentSearchTerm = createSelector(
  selectUiState,
  (uiState): string | undefined => uiState.searchTerm &&
    uiState.searchTerm.toLowerCase()
);

export const selectIsSearchBarVisible = createSelector(
  selectUiState,
  (uiState): boolean => uiState.isSearchBarVisible
);
