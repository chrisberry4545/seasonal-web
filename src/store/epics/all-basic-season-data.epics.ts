import { ofType } from 'redux-observable';

import {
  getAllSeasonData
} from '../../services';

import {
  INIT_APP,
  SET_ALL_BASIC_SEASON_DATA_START,
  setAllBasicSeasonDataStart,
  setAllBasicSeasonDataSuccess
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux';

export const getAllBasicSeasonDataStartEpic = (
  actions$: Observable<Action>
) => (
  actions$.pipe(
    ofType(INIT_APP),
    map(() => setAllBasicSeasonDataStart())
  )
);

export const getAllBasicSeasonDataEpic = (
  actions$: Observable<Action>
) => (
  actions$.pipe(
    ofType(SET_ALL_BASIC_SEASON_DATA_START),
    switchMap(() => getAllSeasonData()),
    map((seasonData) => setAllBasicSeasonDataSuccess(seasonData))
  )
);
