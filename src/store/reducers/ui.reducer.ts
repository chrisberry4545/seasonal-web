import {
  CLOSE_MENU,
  OPEN_MENU,
  SELECT_SEASON,
  GO_TO_FOOD_TAB,
  GO_TO_RECIPES_TABS
} from '../actions';
import { UiState } from '../../interfaces';
import { Action } from 'redux';
import { TABS } from '../../const';

const getDefaultState = (): UiState => ({
  currentTab: TABS.FOOD,
  isMenuOpen: false
});

export function uiReducer(
  state = getDefaultState(),
  action: Action
): UiState {
  switch (action.type) {
    case SELECT_SEASON:
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false
      };
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true
      };
    case GO_TO_FOOD_TAB:
      return {
        ...state,
        currentTab: TABS.FOOD
      };
    case GO_TO_RECIPES_TABS:
      return {
        ...state,
        currentTab: TABS.RECIPES
      };
    default:
      return state
  }
}
