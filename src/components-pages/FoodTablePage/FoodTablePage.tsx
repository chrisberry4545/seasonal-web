import React from 'react';

import './FoodTablePage.scss';

import {
  BottomTabsConnecter,
  CurrentSeasonNameConnecter,
  FoodTableConnecter,
  HeaderConnecter,
  SeasonMenuConnecter
} from '../../components-main';

export const FoodTablePage = () => (
  <div className='c-food-table-page'>
    <HeaderConnecter />
    <SeasonMenuConnecter />
    <div className='c-food-table-page__main'>
      <CurrentSeasonNameConnecter />
      <FoodTableConnecter />
    </div>
    <BottomTabsConnecter />
  </div>
);
