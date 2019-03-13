import {
  CLOSE_MENU,
  OPEN_MENU
} from '../actions';
import { UiState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): UiState => ({
  isMenuOpen: false
});

export function uiReducer(
  state = getDefaultState(),
  action: Action
): UiState {
  switch (action.type) {
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
    default:
      return state
  }
}
