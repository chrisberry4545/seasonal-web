import { connect } from 'react-redux';
import {
  FoodTable
} from './FoodTable';
import {
  selectIsCurrentSeasonLoading,
  selectVisibleFoodData,
  selectVisibleRecipeData,
  selectIsCurrentTabFood
} from '../../store';
import { IState } from '../../interfaces';
import { IFoodTableInputProps } from './FoodTable.interface';

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

export const FoodTableConnecter = connect(
  mapStateToProps
)(FoodTable);
