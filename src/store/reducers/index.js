import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { foodDataReducer } from './food-data.reducer';

import {
  rootEpic
} from '../epics';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  combineReducers({
    foodData: foodDataReducer
  }),
  applyMiddleware(epicMiddleware)
);
epicMiddleware.run(rootEpic);
