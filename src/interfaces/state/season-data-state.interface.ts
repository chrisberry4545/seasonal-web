import { BaseSeason } from '@chrisb-dev/seasonal-shared';

export interface SeasonDataState {
  isLoading: boolean;
  data?: BaseSeason[];
}
