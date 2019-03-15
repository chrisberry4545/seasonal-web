import { Food, Recipe } from '@chrisb-dev/seasonal-shared';

export interface FoodTableInputProps {
  isCurrentTabFood: boolean;
  food: Food[] | undefined;
  recipes: Recipe[] | undefined;
  isLoading: boolean;
}

export interface FoodTableProps extends FoodTableInputProps {}
