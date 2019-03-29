import { connect } from 'react-redux';
import {
  FoodDetailsTopSection
} from './FoodDetailsTopSection';
import {
  goBackFromFoodDetails,
  selectCurrentFoodDetailsName,
  selectCurrentFoodDetailsImageUrl,
  selectIsCurrentFoodDetailsLoading
} from '../../store';

import { IState } from '../../interfaces';
import {
  IFoodDetailsTopSectionInputProps,
  IFoodDetailsTopSectionDispatchProps
} from './FoodDetailsTopSection.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): IFoodDetailsTopSectionInputProps => ({
  foodImageUrl: selectCurrentFoodDetailsImageUrl(state),
  foodName: selectCurrentFoodDetailsName(state),
  isLoading: selectIsCurrentFoodDetailsLoading(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): IFoodDetailsTopSectionDispatchProps => ({
  onGoBack: () => dispatch(goBackFromFoodDetails())
});

export const FoodDetailsTopSectionConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodDetailsTopSection);
