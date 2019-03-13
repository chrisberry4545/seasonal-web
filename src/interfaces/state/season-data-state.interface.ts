import { Season } from '../backend-data';

export interface SeasonDataState {
  isLoading: boolean;
  data?: Season[];
}
