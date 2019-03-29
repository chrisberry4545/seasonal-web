import { connect } from 'react-redux';
import {
  FoodTable
} from './FoodTable';
import {
  selectIsCurrentSeasonLoading,
  selectVisibleRecipeData,
  selectIsCurrentTabFood,
  selectVisibleFoodData,
  foodItemClicked,
  recipeItemClicked
} from '../../store';
import { IState } from '../../interfaces';
import {
  IFoodTableInputProps,
  IFoodTableDispatchProps
} from './FoodTable.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IFoodTableInputProps => {
  return {
    food: selectVisibleFoodData(state),
    isCurrentTabFood: selectIsCurrentTabFood(state),
    isLoading: selectIsCurrentSeasonLoading(state),
    recipes: selectVisibleRecipeData(state)
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch
): IFoodTableDispatchProps => {
  return {
    onFoodClick: (foodItemId) => dispatch(foodItemClicked(foodItemId)),
    onRecipeClick: (recipeItemId) => dispatch(recipeItemClicked(recipeItemId))
  };
};

export const FoodTableConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodTable);
