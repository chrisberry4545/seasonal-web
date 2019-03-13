import { UiState } from './ui-state.interface';
import { SeasonDataState } from './season-data-state.interface';
import { FoodDataState } from './food-data-state.interface';

export interface State {
  foodData: FoodDataState;
  seasonData: SeasonDataState;
  ui: UiState;
}
