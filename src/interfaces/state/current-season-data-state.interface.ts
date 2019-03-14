import {
  HydratedSeason
} from '../backend-data';

export interface CurrentSeasonDataState {
  currentSeasonIndex: number;
  isLoading: boolean;
  data?: HydratedSeason;
}
