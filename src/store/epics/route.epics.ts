import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import {
  mapTo, withLatestFrom, map, filter
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import {
  GO_TO_WEB_VERSION,
  GO_BACK_FROM_FOOD_DETAILS
} from '../actions';
import {
  RECIPE_ITEM_CLICKED,
  IRecipeItemClicked,
  FOOD_ITEM_CLICKED,
  IFoodItemClicked,
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON,
  setCurrentFoodDetailsDataStart,
  INIT_APP,
  selectCurrentSeasonRecipesById
} from '@chrisb-dev/seasonal-shared';
import { push } from 'connected-react-router';
import { FOOD_TABLE_URL, FOOD_DETAILS_URL } from '../../const';
import { IState } from '../../interfaces';
import { selectCurrentFoodDetailsId } from '../selectors';
import { WebSeasonalEpic } from './seasonal-epic.type';

export const goToWebVersion$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_WEB_VERSION),
    mapTo(push(FOOD_TABLE_URL))
  )
);

export const goToRecipeLink$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(RECIPE_ITEM_CLICKED),
    withLatestFrom(state$),
    map(([
      action,
      state
    ]) => selectCurrentSeasonRecipesById(
        (action as IRecipeItemClicked).recipeItemId
      )(state)
    ),
    map((recipe) => {
      if (recipe) {
        window.open(recipe.linkUrl, '_blank');
      }
      return { type: '' };
    })
  )
);

export const goToFoodLink$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    map((action) => (
      push(`${FOOD_DETAILS_URL}/${(action as IFoodItemClicked).foodItemId}`)
    ))
  )
);

export const goToFoodDetails$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    map((action) => (
      setCurrentFoodDetailsDataStart((action as IFoodItemClicked).foodItemId)
    ))
  )
);

export const initFoodDetails$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentFoodDetailsId(state)),
    filter((foodDetailsId) => Boolean(foodDetailsId)),
    map((foodDetailsId) => setCurrentFoodDetailsDataStart(foodDetailsId!))
  )
);

export const goToFoodTable$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_BACK_FROM_FOOD_DETAILS,
      FOOD_DETAILS_SELECT_SEASON,
      SELECT_SEASON
    ),
    mapTo(push(FOOD_TABLE_URL))
  )
);
