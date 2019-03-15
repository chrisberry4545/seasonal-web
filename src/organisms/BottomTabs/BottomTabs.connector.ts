import { connect } from 'react-redux';
import {
  BottomTabs
} from './BottomTabs';
import {
  goToFoodTab,
  goToRecipesTab,
  selectIsCurrentTabFood,
  selectIsCurrentTabRecipes
} from '../../store';
import {
  BottomTabDispatchProps,
  BottomTabInputProps
} from './BottomTabs.interface';
import { Dispatch } from 'redux';
import { State } from '../../interfaces';

const mapStateToProps = (
  state: State
): BottomTabInputProps => ({
  isCurrentTabFood: selectIsCurrentTabFood(state),
  isCurrentTabRecipes: selectIsCurrentTabRecipes(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): BottomTabDispatchProps => ({
  goToFoodTab: () => dispatch(goToFoodTab()),
  goToRecipesTab: () => dispatch(goToRecipesTab())
});

export const BottomTabsConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomTabs);
