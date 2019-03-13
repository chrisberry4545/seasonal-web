import { combineEpics } from 'redux-observable';

import {
  getFoodDataStartEpic,
  getFoodDataEpic,
} from './food-data.epics';

import { initAppEpic } from './init.epics';

import {
  getAllSeasonDataStartEpic,
  getAllSeasonDataEpic
} from './season-data.epics';

export const rootEpic = combineEpics(
  initAppEpic,
  getFoodDataStartEpic,
  getFoodDataEpic,
  getAllSeasonDataStartEpic,
  getAllSeasonDataEpic
);
