import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore,
  compose
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { currentSeasonDataReducer } from './current-season-data.reducer';

import { allBasicSeasonDataReducer } from './all-basic-season-data.reducer';

import { uiReducer } from './ui.reducer';

import {
  rootEpic
} from '../epics';

import { IState } from '../../interfaces';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const epicMiddleware = createEpicMiddleware<Action, Action, IState, {}>();
export const storeHistory = createBrowserHistory();

export const store = createStore(
  combineReducers<IState>({
    allBasicSeasonData: allBasicSeasonDataReducer,
    currentSeasonData: currentSeasonDataReducer,
    router: connectRouter(storeHistory),
    ui: uiReducer
  }),
  undefined,
  compose(
    applyMiddleware(
      routerMiddleware(storeHistory),
      epicMiddleware
    )
  )
);
epicMiddleware.run(rootEpic);
