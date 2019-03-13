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

export const getAllSeasonDataStartEpic = (actions$) => actions$.pipe(
  ofType(INIT_APP),
  map(() => setSeasonDataStart())
);

export const getAllSeasonDataEpic = (actions$) => actions$.pipe(
  ofType(SET_SEASON_DATA_START),
  switchMap(() => getAllSeasonData()),
  map((seasonData) => setSeasonDataSuccess(seasonData))
);
