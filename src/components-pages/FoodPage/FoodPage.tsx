import React from 'react';

import './FoodPage.scss';

import {
  BottomTabsConnecter,
  CurrentSeasonNameConnecter,
  FoodTableConnecter,
  HeaderConnecter,
  SeasonMenuConnecter
} from '../../components-main';

export const FoodPage = () => (
  <div className='c-food-page'>
    <HeaderConnecter />
    <SeasonMenuConnecter />
    <div>
      <CurrentSeasonNameConnecter />
      <FoodTableConnecter />
    </div>
    <BottomTabsConnecter />
  </div>
);
