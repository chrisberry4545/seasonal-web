import { combineEpics } from 'redux-observable';

import {
  getFoodDataStartEpic,
  getFoodDataEpic,
} from './food-data.epics';

import { initAppEpic } from './init.epics';

export const rootEpic = combineEpics(
  initAppEpic,
  getFoodDataStartEpic,
  getFoodDataEpic
);
