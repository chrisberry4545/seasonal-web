import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import {
  mapTo, withLatestFrom, map
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SeasonalEpic } from './seasonal-epic.type';
import {
  RECIPE_ITEM_CLICKED,
  IRecipeItemClicked,
  GO_TO_WEB_VERSION,
  FOOD_ITEM_CLICKED,
  IFoodItemClicked,
  GO_BACK_FROM_FOOD_DETAILS,
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON
} from '../actions';
import { push } from 'connected-react-router';
import { FOOD_TABLE_URL, FOOD_DETAILS_URL } from '../../const';
import { IState } from '../../interfaces';
import { selectCurrentSeasonRecipesById } from '../selectors';

export const goToWebVersion$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(GO_TO_WEB_VERSION),
    mapTo(push(FOOD_TABLE_URL))
  )
);

export const goToRecipeLink$: SeasonalEpic = (
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

export const goToFoodLink$: SeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(FOOD_ITEM_CLICKED),
    map((action) => (
      push(`${FOOD_DETAILS_URL}/${(action as IFoodItemClicked).foodItemId}`)
    ))
  )
);

export const goToFoodTable$: SeasonalEpic = (
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
