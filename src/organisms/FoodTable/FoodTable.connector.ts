import { connect } from 'react-redux';
import {
  FoodTable
} from './FoodTable';
import {
  selectIsCurrentSeasonLoading,
  selectCurrentSeasonFood,
  selectCurrentSeasonRecipes,
  selectIsCurrentTabFood
} from '../../store';
import { State } from '../../interfaces';
import { FoodTableInputProps } from './FoodTable.interface';

const mapStateToProps = (
  state: State
): FoodTableInputProps => {
  return {
    isCurrentTabFood: selectIsCurrentTabFood(state),
    isLoading: selectIsCurrentSeasonLoading(state),
    food: selectCurrentSeasonFood(state),
    recipes: selectCurrentSeasonRecipes(state)
  }
}

export const FoodTableConnecter = connect(
  mapStateToProps
)(FoodTable);
