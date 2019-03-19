import { IFood, IRecipe } from '@chrisb-dev/seasonal-shared';

export interface IFoodTableInputProps {
  isCurrentTabFood: boolean;
  food: IFood[] | undefined;
  recipes: IRecipe[] | undefined;
  isLoading: boolean;
}
