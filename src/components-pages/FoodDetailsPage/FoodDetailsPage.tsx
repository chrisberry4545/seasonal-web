import React from 'react';

import './FoodDetailsPage.scss';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  PageWithMenu,
  SeasonsForFoodConnecter
} from '../../components-main';

export const FoodDetailsPage = () => (
  <PageWithMenu>
    <div className='c-food-details-page__main'>
      <FoodDetailsTopSectionConnecter />
      <FoodDetailsLoaderConnecter />
      <SeasonsForFoodConnecter />
    </div>
  </PageWithMenu>
);
