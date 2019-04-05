import { combineEpics } from 'redux-observable';

import {
  getCurrentSeasonDataStartEpic$,
  getCurrentSeasonDataEpic$
} from './current-season-data.epics';

import { initAppEpic$ } from './init.epics';

import {
  getAllBasicSeasonDataStartEpic$,
  getAllBasicSeasonDataEpic$
} from './all-basic-season-data.epics';
import { trackActionEpic$ } from './tracking.epics';

import {
  goToWebVersion$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodTable$,
  goToFoodDetails$,
  initFoodDetails$
} from './route.epics';
import {
  getCurrentFoodDetailsDataEpic$
} from './current-food-details-data.epics';

export const rootEpic = combineEpics(
  initAppEpic$,
  getCurrentSeasonDataStartEpic$,
  getCurrentSeasonDataEpic$,
  getAllBasicSeasonDataStartEpic$,
  getAllBasicSeasonDataEpic$,
  trackActionEpic$,
  goToWebVersion$,
  goToRecipeLink$,
  goToFoodLink$,
  goToFoodDetails$,
  initFoodDetails$,
  goToFoodTable$,
  getCurrentFoodDetailsDataEpic$
);
