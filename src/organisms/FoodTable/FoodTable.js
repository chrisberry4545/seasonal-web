import React from 'react';

import './FoodTable.scss';

import {
  ImageGrid
} from '../../molecules';

import {
  LoadingSpinner
} from '../../elements';

export const FoodTable = ({
  isLoading,
  food
}) => (
  isLoading
    ? <div className='c-food-table__loading-spinner-wrapper'>
      <LoadingSpinner />
    </div>
    : <ImageGrid data={food} />
);
