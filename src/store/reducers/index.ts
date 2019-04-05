import {
  Action,
  applyMiddleware,
  combineReducers,
  createStore,
  compose
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import {
  currentFoodDetailsDataReducer
} from './current-food-details-data.reducer';

import { currentSeasonDataReducer } from './current-season-data.reducer';

import { allBasicSeasonDataReducer } from './all-basic-season-data.reducer';

import { uiReducer } from './ui.reducer';

import { webUiReducer } from './web-ui.reducer';

import {
  rootEpic
} from '../epics';

import { IState } from '../../interfaces';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';

const epicMiddleware = createEpicMiddleware<Action, Action, IState, {}>();
export const storeHistory = createHashHistory();

export const store = createStore(
  combineReducers<IState>({
    allBasicSeasonData: allBasicSeasonDataReducer,
    currentFoodDetailsData: currentFoodDetailsDataReducer,
    currentSeasonData: currentSeasonDataReducer,
    router: connectRouter(storeHistory),
    ui: uiReducer,
    webUi: webUiReducer
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
