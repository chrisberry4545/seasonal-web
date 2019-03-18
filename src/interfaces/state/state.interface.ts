import { IUiState } from './ui-state.interface';
import { ISeasonDataState } from './season-data-state.interface';
import { ICurrentSeasonDataState } from './current-season-data-state.interface';

export interface IState {
  allBasicSeasonData: ISeasonDataState;
  currentSeasonData: ICurrentSeasonDataState;
  ui: IUiState;
}
