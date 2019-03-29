import React from 'react';

import './FoodDetailsPage.scss';

import {
  FoodDetailsLoaderConnecter,
  FoodDetailsTopSectionConnecter,
  HeaderConnecter,
  SeasonsForFoodConnecter,
  SeasonMenuConnecter
} from '../../components-main';

export const FoodDetailsPage = () => (
  <div className='c-food-details-page'>
    <HeaderConnecter />
    <SeasonMenuConnecter />
    <div className='c-food-details-page__main'>
      <FoodDetailsTopSectionConnecter />
      <FoodDetailsLoaderConnecter />
      <SeasonsForFoodConnecter />
    </div>
  </div>
);
