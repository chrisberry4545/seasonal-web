import {
  Food
} from './food.interface';

import {
  Season
} from './season.interface';

import { Recipe } from './recipe.interface';

export interface HydratedSeason extends Season {
  food: Food[] | undefined;
  recipes: Recipe[] | undefined;
}
