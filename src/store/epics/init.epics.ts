import {
  initApp
} from '../actions';

import {
  of
} from 'rxjs';

import {
  map
} from 'rxjs/operators';

export const initAppEpic = () => of(null).pipe(
  map(() => initApp()),
);
