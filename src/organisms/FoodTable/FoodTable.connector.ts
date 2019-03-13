import { connect } from 'react-redux';
import {
  FoodTable
} from './FoodTable';
import {
  selectIsFoodDataLoading,
  selectFoodDataFood
} from '../../store';
import { State } from '../../interfaces';
import { FoodTableInputProps } from './FoodTable.interface';

const mapStateToProps = (
  state: State
): FoodTableInputProps => {
  return {
    isLoading: selectIsFoodDataLoading(state),
    food: selectFoodDataFood(state)
  }
}

export const FoodTableConnecter = connect(
  mapStateToProps
)(FoodTable);
