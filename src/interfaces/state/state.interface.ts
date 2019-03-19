import { IUiState } from './ui-state.interface';
import { ISeasonDataState } from './season-data-state.interface';
import { ICurrentSeasonDataState } from './current-season-data-state.interface';

import { RouterState } from 'connected-react-router';

export interface IState {
  allBasicSeasonData: ISeasonDataState;
  currentSeasonData: ICurrentSeasonDataState;
  router: RouterState;
  ui: IUiState;
}
