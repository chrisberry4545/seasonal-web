import { createMatchSelector, RouterRootState } from 'connected-react-router';
import { FOOD_DETAILS_URL } from '../../const';
import { createSelector } from 'reselect';

export const selectCurrentFoodDetailsParams = createMatchSelector<
  RouterRootState,
  {
    id: string
  }
>(
  `${FOOD_DETAILS_URL}/:id`
);

export const selectCurrentFoodDetailsId = createSelector(
  selectCurrentFoodDetailsParams,
  (routeParams) => routeParams && routeParams.params.id
);
