import { ofType } from 'redux-observable';

import {
  getAllSeasonData
} from '../../services';

import {
  INIT_APP,
  SET_SEASON_DATA_START,
  setSeasonDataStart,
  setSeasonDataSuccess
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'redux';

export const getAllSeasonDataStartEpic = (actions$: Observable<Action>) => (
  actions$.pipe(
    ofType(INIT_APP),
    map(() => setSeasonDataStart())
  )
);

export const getAllSeasonDataEpic = (actions$: Observable<Action>) => (
  actions$.pipe(
    ofType(SET_SEASON_DATA_START),
    switchMap(() => getAllSeasonData()),
    map((seasonData) => setSeasonDataSuccess(seasonData))
  )
);
