import React, { FC } from 'react';

import './RecipeTable.scss';

import {
  ImageGrid
} from '../../components-layout';

import {
  LoadingSpinner
} from '../../components-elements';
import { IRecipeTableProps } from './RecipeTable.interface';

export const RecipeTable: FC<IRecipeTableProps> = ({
  isCurrentTabFood,
  isLoading,
  recipes,
  onRecipeClick
}) => (
  !isCurrentTabFood
    ? isLoading
      ? <div className='c-food-table__loading-spinner-wrapper'>
        <LoadingSpinner />
      </div>
      : <ImageGrid data={recipes} onClick={onRecipeClick} />
    : null
);
