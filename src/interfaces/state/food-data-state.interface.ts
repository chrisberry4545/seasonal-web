import {
  HydratedSeason
} from '../backend-data';

export interface FoodDataState {
  isLoading: boolean;
  data?: HydratedSeason;
}
