import { connect } from 'react-redux';
import {
  FoodTable
} from './FoodTable';
import {
  selectIsFoodDataLoading,
  selectFoodDataFood
} from '../../store';

const mapStateToProps = (state) => {
  return {
    isLoading: selectIsFoodDataLoading(state),
    food: selectFoodDataFood(state)
  }
}

export const FoodTableConnecter = connect(
  mapStateToProps
)(FoodTable);
