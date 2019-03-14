import {
  initApp
} from '../actions';

import {
  of,
  Observable
} from 'rxjs';

import {
  map
} from 'rxjs/operators';
import { Action } from 'redux';
import { SeasonalEpic } from './seasonal-epic.type';

export const initAppEpic: SeasonalEpic = (): Observable<Action> => (
  of(null).pipe(
    map(() => initApp()),
  )
);
