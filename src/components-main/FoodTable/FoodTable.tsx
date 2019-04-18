import React, { FC } from 'react';

import './FoodTable.scss';

import {
  ImageGrid
} from '../../components-layout';

import {
  LoadingSpinner
} from '../../components-elements';
import { IFoodTableProps } from './FoodTable.interface';

export const FoodTable: FC<IFoodTableProps> = ({
  isCurrentTabFood,
  isLoading,
  food,
  recipes,
  onFoodClick,
  onRecipeClick
}) => (
  isLoading
    ? <div className='c-food-table__loading-spinner-wrapper'>
      <LoadingSpinner />
    </div>
    : isCurrentTabFood
      ? <ImageGrid data={food} onClick={onFoodClick} />
      : <ImageGrid data={recipes} onClick={onRecipeClick} />
);
