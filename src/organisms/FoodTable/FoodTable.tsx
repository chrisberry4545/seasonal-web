import React from 'react';

import './FoodTable.scss';

import {
  ImageGrid
} from '../../molecules';

import {
  LoadingSpinner
} from '../../elements';
import { FoodTableProps } from './FoodTable.interface';

export const FoodTable = ({
  isCurrentTabFood,
  isLoading,
  food,
  recipes
}: FoodTableProps) => (
  isLoading
    ? <div className='c-food-table__loading-spinner-wrapper'>
      <LoadingSpinner />
    </div>
    : isCurrentTabFood
      ? <ImageGrid data={food} />
      : <ImageGrid data={recipes} />
);
