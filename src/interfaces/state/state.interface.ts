import { UiState } from './ui-state.interface';
import { SeasonDataState } from './season-data-state.interface';
import { CurrentSeasonDataState } from './current-season-data-state.interface';

export interface State {
  allBasicSeasonData: SeasonDataState;
  currentSeasonData: CurrentSeasonDataState;
  ui: UiState;
}
