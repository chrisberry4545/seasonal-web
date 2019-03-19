import React from 'react';

import './FoodTable.scss';

import {
  ImageGrid
} from '../../components-layout';

import {
  LoadingSpinner
} from '../../components-elements';
import { IFoodTableInputProps } from './FoodTable.interface';

export const FoodTable = ({
  isCurrentTabFood,
  isLoading,
  food,
  recipes
}: IFoodTableInputProps) => (
  isLoading
    ? <div className='c-food-table__loading-spinner-wrapper'>
      <LoadingSpinner />
    </div>
    : isCurrentTabFood
      ? <ImageGrid data={food} />
      : <ImageGrid data={recipes} />
);
