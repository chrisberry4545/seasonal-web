import {
  HydratedSeason
} from '@chrisb-dev/seasonal-shared';

export interface CurrentSeasonDataState {
  currentSeasonIndex: number;
  isLoading: boolean;
  data?: HydratedSeason;
}
