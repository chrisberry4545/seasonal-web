import { ofType, StateObservable, ActionsObservable } from 'redux-observable';

import {
  getFoodDetailsData
} from '../../services';

import {
  SET_CURRENT_FOOD_DETAILS_DATA_START,
  setCurrentFoodDetailsDataSuccess,
  setCurrentFoodDetailsDataStart,
  FOOD_ITEM_CLICKED,
  INIT_APP
} from '../actions';

import {
  map,
  switchMap,
  withLatestFrom,
  mapTo,
  filter
} from 'rxjs/operators';
import { Action } from 'redux';
import { IState } from '../../interfaces';
import { selectCurrentFoodDetailsId } from '../selectors';
import { Observable } from 'rxjs';
import { SeasonalEpic } from './seasonal-epic.type';

export const getCurrentFoodDetailsDataStartEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    mapTo(setCurrentFoodDetailsDataStart())
  )
);

export const getCurrentFoodDetailsDataEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_CURRENT_FOOD_DETAILS_DATA_START,
      INIT_APP
    ),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentFoodDetailsId(state)),
    filter((foodDetailsId) => Boolean(foodDetailsId)),
    switchMap((foodDetailsId) => getFoodDetailsData(foodDetailsId)),
    map((currentFoodData) => setCurrentFoodDetailsDataSuccess(currentFoodData))
  )
);
