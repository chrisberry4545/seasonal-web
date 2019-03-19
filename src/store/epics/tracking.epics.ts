import { ActionsObservable } from 'redux-observable';

import {
  SELECT_SEASON,
  OPEN_MENU,
  CLOSE_MENU,
  GO_TO_FOOD_TAB,
  GO_TO_RECIPES_TABS,
  GO_TO_WEB_VERSION
} from '../actions';

import {
  map,
  filter,
  ignoreElements
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SeasonalEpic } from './seasonal-epic.type';

const ACTIONS_TO_TRACK = [
  SELECT_SEASON,
  OPEN_MENU,
  CLOSE_MENU,
  GO_TO_FOOD_TAB,
  GO_TO_RECIPES_TABS,
  GO_TO_WEB_VERSION
];

export const trackActionEpic$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    filter(({ type }) => ACTIONS_TO_TRACK.includes(type)),
    map(({ type }) => ga('send', 'event', type, type)),
    ignoreElements()
  )
);
