import { ofType, StateObservable, ActionsObservable } from 'redux-observable';

import {
  getSeasonDataBySeasonIndex
} from '../../services';

import {
  INIT_APP,
  SET_CURRENT_SEASON_DATA_START,
  setCurrentSeasonDataSuccess,
  setCurrentSeasonDataStart,
  SELECT_SEASON
} from '../actions';

import {
  map,
  switchMap,
  withLatestFrom,
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { State } from '../../interfaces';
import { selectCurrentSeasonIndex } from '../selectors';
import { Observable } from 'rxjs';
import { SeasonalEpic } from './seasonal-epic.type';

export const getCurrentSeasonDataStartEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>,
): Observable<Action> => (
  actions$.pipe(
    ofType(
      INIT_APP,
      SELECT_SEASON
    ),
    mapTo(setCurrentSeasonDataStart())
  )
);

export const getCurrentSeasonDataEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<State>,
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_DATA_START),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentSeasonIndex(state)),
    switchMap((seasonIndex) => getSeasonDataBySeasonIndex(seasonIndex)),
    map((foodData) => setCurrentSeasonDataSuccess(foodData))
  )
);
