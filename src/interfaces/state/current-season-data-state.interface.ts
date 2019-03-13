import {
  HydratedSeason
} from '../backend-data';

export interface CurrentSeasonDataState {
  isLoading: boolean;
  data?: HydratedSeason;
}
