import { ActionsObservable, ofType } from 'redux-observable';
import {
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SeasonalEpic } from './seasonal-epic.type';
import { GO_TO_WEB_VERSION } from '../actions';
import { push } from 'connected-react-router';
import { FOOD_URL } from '../../const';

export const goToWebVersion$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_WEB_VERSION),
    mapTo(push(FOOD_URL))
  )
);
