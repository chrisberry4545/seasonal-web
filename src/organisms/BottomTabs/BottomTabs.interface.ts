export interface BottomTabInputProps {
  isCurrentTabFood: boolean;
  isCurrentTabRecipes: boolean;
}

export interface BottomTabDispatchProps {
  goToFoodTab: () => void;
  goToRecipesTab: () => void;
}

export interface BottomTabProps
  extends BottomTabInputProps, BottomTabDispatchProps {}
