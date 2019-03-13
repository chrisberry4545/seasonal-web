import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { foodDataReducer } from './food-data.reducer';

import { seasonDataReducer } from './season-data.reducer';

import { uiReducer } from './ui.reducer';

import {
  rootEpic
} from '../epics';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  combineReducers({
    foodData: foodDataReducer,
    seasonData: seasonDataReducer,
    ui: uiReducer
  }),
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);
