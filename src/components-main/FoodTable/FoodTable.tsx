import React from 'react';

import './FoodTable.scss';

import {
  ImageGrid
} from '../../components-layout';

import {
  LoadingSpinner
} from '../../components-elements';
import { IFoodTableProps } from './FoodTable.interface';

export const FoodTable = ({
  isCurrentTabFood,
  isLoading,
  food,
  recipes,
  onFoodClick,
  onRecipeClick
}: IFoodTableProps) => (
  isLoading
    ? <div className='c-food-table__loading-spinner-wrapper'>
      <LoadingSpinner />
    </div>
    : isCurrentTabFood
      ? <ImageGrid data={food} onClick={onFoodClick} />
      : <ImageGrid data={recipes} onClick={onRecipeClick} />
);
