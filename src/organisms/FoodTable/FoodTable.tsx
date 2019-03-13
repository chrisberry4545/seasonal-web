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
  isLoading,
  food
}: FoodTableProps) => (
  isLoading
    ? <div className='c-food-table__loading-spinner-wrapper'>
      <LoadingSpinner />
    </div>
    : <ImageGrid data={food} />
);
