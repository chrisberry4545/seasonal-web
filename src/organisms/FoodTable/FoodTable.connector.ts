import { connect } from 'react-redux';
import {
  FoodTable
} from './FoodTable';
import {
  selectIsCurrentSeasonLoading,
  selectCurrentSeasonFood
} from '../../store';
import { State } from '../../interfaces';
import { FoodTableInputProps } from './FoodTable.interface';

const mapStateToProps = (
  state: State
): FoodTableInputProps => {
  return {
    isLoading: selectIsCurrentSeasonLoading(state),
    food: selectCurrentSeasonFood(state)
  }
}

export const FoodTableConnecter = connect(
  mapStateToProps
)(FoodTable);
