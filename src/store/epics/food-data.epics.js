import { ofType } from 'redux-observable';

import {
  getCurrentSeasonIndex,
  getSeasonDataBySeasonIndex
} from '../../services';

import {
  INIT_APP,
  SET_FOOD_DATA_START,
  setFoodDataSuccess,
  setFoodDataStart
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';

export const getFoodDataStartEpic = (actions$) => actions$.pipe(
  ofType(INIT_APP),
  map(() => setFoodDataStart())
);

export const getFoodDataEpic = (actions$) => actions$.pipe(
  ofType(SET_FOOD_DATA_START),
  switchMap(() => getSeasonDataBySeasonIndex(getCurrentSeasonIndex())),
  map((foodData) => setFoodDataSuccess(foodData))
);
