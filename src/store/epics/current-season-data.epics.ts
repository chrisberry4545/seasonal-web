import { ofType } from 'redux-observable';

import {
  getCurrentSeasonIndex,
  getSeasonDataBySeasonIndex
} from '../../services';

import {
  INIT_APP,
  SET_CURRENT_SEASON_DATA_START,
  setCurrentSeasonDataSuccess,
  setCurrentSeasonDataStart
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux';

export const getCurrentSeasonDataStartEpic = (
  actions$: Observable<Action>
) => (
  actions$.pipe(
    ofType(INIT_APP),
    map(() => setCurrentSeasonDataStart())
  )
);

export const getCurrentSeasonDataEpic = (
  actions$: Observable<Action>
) => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_DATA_START),
    switchMap(() => getSeasonDataBySeasonIndex(getCurrentSeasonIndex())),
    map((foodData) => setCurrentSeasonDataSuccess(foodData))
  )
);
