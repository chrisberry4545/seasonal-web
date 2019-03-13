import {
  Food
} from './food.interface';

import {
  Season
} from './season.interface';

export interface HydratedSeason extends Season {
  food: Food[];
}
