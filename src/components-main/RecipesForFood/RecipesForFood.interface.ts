import { IRecipe } from '@chrisb-dev/seasonal-shared';

export interface IRecipesForFoodInputProps {
  isLoading: boolean;
  currentFoodDetailsRecipes: IRecipe[] | undefined;
}

export interface IRecipesForFoodDispatchProps {
  onRecipeSelected: (recipeId: string) => void;
}

export interface IRecipesForFoodProps
  extends IRecipesForFoodInputProps, IRecipesForFoodDispatchProps {}
