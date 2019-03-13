import { combineEpics } from 'redux-observable';

import {
  getCurrentSeasonDataStartEpic,
  getCurrentSeasonDataEpic,
} from './current-season-data.epics';

import { initAppEpic } from './init.epics';

import {
  getAllBasicSeasonDataStartEpic,
  getAllBasicSeasonDataEpic
} from './all-basic-season-data.epics';

export const rootEpic = combineEpics(
  initAppEpic,
  getCurrentSeasonDataStartEpic,
  getCurrentSeasonDataEpic,
  getAllBasicSeasonDataStartEpic,
  getAllBasicSeasonDataEpic
);
