import { Food } from '../../interfaces';

export interface FoodTableInputProps {
  food: Food[] | undefined;
  isLoading: boolean;
}

export interface FoodTableProps extends FoodTableInputProps {}
