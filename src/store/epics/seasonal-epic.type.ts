import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { State } from '../../interfaces';

export type SeasonalEpic = Epic<Action, Action, State, {}>;
