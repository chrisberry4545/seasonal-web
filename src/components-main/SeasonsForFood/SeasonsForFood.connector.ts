import { connect } from 'react-redux';
import {
  SeasonsForFood
} from './SeasonsForFood';
import {
  selectSeasonsSelectedForFood,
  selectIsCurrentFoodDetailsLoading,
  foodDetailsSelectSeason
} from '../../store';

import { IState } from '../../interfaces';
import {
  ISeasonForFoodInputProps,
  ISeasonForFoodDispatchProps
} from './SeasonsForFood.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonForFoodInputProps => ({
  isLoading: selectIsCurrentFoodDetailsLoading(state),
  seasonsSelectedForFood: selectSeasonsSelectedForFood(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonForFoodDispatchProps => ({
  onSeasonSelected: (seasonIndex: number) => (
    dispatch(foodDetailsSelectSeason(seasonIndex))
  )
});

export const SeasonsForFoodConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonsForFood);
