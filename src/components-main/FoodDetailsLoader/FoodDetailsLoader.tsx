import React from 'react';

import './FoodDetailsLoader.scss';

import {
  LoadingSpinner
} from '../../components-elements';

import {
  IFoodDetailsLoaderInputProps
} from './FoodDetailsLoader.interface';

export const FoodDetailsLoader = ({
  isLoading
}: IFoodDetailsLoaderInputProps) => (
  isLoading
    ? <div className='c-food-details-loader'>
      <LoadingSpinner />
    </div>
    : null
);
