export interface IFoodDetailsTopSectionInputProps {
  isLoading: boolean;
  foodName: string | undefined;
  foodImageUrl: string | undefined;
}

export interface IFoodDetailsTopSectionDispatchProps {
  onGoBack: () => void;
}

export interface ISeasonForFoodTopSectionProps
  extends IFoodDetailsTopSectionDispatchProps,
  IFoodDetailsTopSectionInputProps {}
