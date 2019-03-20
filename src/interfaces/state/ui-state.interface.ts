import {
  TABS
} from '../../const';

export interface IUiState {
  currentTab: TABS;
  isMenuOpen: boolean;
  isSearchBarVisible: boolean;
  searchTerm?: string;
}
