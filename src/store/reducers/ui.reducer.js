import {
  CLOSE_MENU,
  OPEN_MENU
} from '../actions';

const getDefaultState = () => ({
  isMenuOpen: false
});

export function uiReducer(state = getDefaultState(), action) {
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
