import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import {
  mapTo, withLatestFrom, map, filter, debounceTime
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import {
  GO_TO_WEB_VERSION,
  GO_BACK_FROM_FOOD_DETAILS
} from '../actions';
import {
  GO_TO_ALL_SEASONS_VIEW,
  RECIPE_ITEM_CLICKED,
  IRecipeItemClicked,
  FOOD_ITEM_CLICKED,
  IFoodItemClicked,
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON,
  setCurrentFoodDetailsStart,
  INIT_APP,
  selectCurrentSeasonRecipesById,
  setAllSeasonsWithFoodStart
} from '@chrisb-dev/seasonal-shared';
import { push, goBack } from 'connected-react-router';
import { FOOD_TABLE_URL, FOOD_DETAILS_URL, ALL_SEASONS_URL } from '../../const';
import { IState } from '../../interfaces';
import { selectCurrentFoodDetailsId, selectIsCurrentRouteAllSeasons } from '../selectors';
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
      setCurrentFoodDetailsStart((action as IFoodItemClicked).foodItemId)
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
    map((foodDetailsId) => setCurrentFoodDetailsStart(foodDetailsId!))
  )
);

export const initAllSeasonsWithFoodData$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_TO_ALL_SEASONS_VIEW,
      INIT_APP,
      GO_BACK_FROM_FOOD_DETAILS
    ),
    debounceTime(50),
    withLatestFrom(state$),
    map(([, state]) => selectIsCurrentRouteAllSeasons(state)),
    filter((isRouteAllSeasons) => Boolean(isRouteAllSeasons)),
    mapTo(setAllSeasonsWithFoodStart())
  )
);

export const goToFoodTable$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      FOOD_DETAILS_SELECT_SEASON,
      SELECT_SEASON
    ),
    mapTo(push(FOOD_TABLE_URL))
  )
);

export const goBack$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      GO_BACK_FROM_FOOD_DETAILS
    ),
    mapTo(goBack())
  )
);

export const goToAllSeasonsView$: WebSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_ALL_SEASONS_VIEW),
    mapTo(push(ALL_SEASONS_URL))
  )
);
