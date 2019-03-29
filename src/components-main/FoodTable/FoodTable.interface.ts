import { IFood, IRecipe } from '@chrisb-dev/seasonal-shared';

export interface IFoodTableInputProps {
  isCurrentTabFood: boolean;
  food: IFood[] | undefined;
  recipes: IRecipe[] | undefined;
  isLoading: boolean;
}

export interface IFoodTableDispatchProps {
  onFoodClick: (foodItemId: string) => void;
  onRecipeClick: (recipeItemId: string) => void;
}

export interface IFoodTableProps
  extends IFoodTableInputProps, IFoodTableDispatchProps {}
