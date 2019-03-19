import React from 'react';

import './FoodPage.scss';

import {
  BottomTabsConnecter,
  FoodTableConnecter,
  HeaderConnecter,
  SeasonMenuConnecter
} from '../../organisms';

export const FoodPage = () => (
  <div className='c-food-page'>
    <HeaderConnecter />
    <SeasonMenuConnecter />
    <FoodTableConnecter />
    <BottomTabsConnecter />
  </div>
);
