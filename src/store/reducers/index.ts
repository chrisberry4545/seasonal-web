import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { currentSeasonDataReducer } from './current-season-data.reducer';

import { allBasicSeasonDataReducer } from './all-basic-season-data.reducer';

import { uiReducer } from './ui.reducer';

import {
  rootEpic
} from '../epics';

import { IState } from '../../interfaces';

const epicMiddleware = createEpicMiddleware<Action, Action, IState, {}>();

export const store = createStore(
  combineReducers<IState>({
    allBasicSeasonData: allBasicSeasonDataReducer,
    currentSeasonData: currentSeasonDataReducer,
    ui: uiReducer
  }),
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);
