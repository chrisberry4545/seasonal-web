import React from 'react';

import './FoodTablePage.scss';

import {
  CurrentSeasonNameConnecter,
  FoodTableConnecter,
  PageWithMenu
} from '../../components-main';

export const FoodTablePage = () => (
  <PageWithMenu>
    <div className='c-food-table-page__main'>
      <CurrentSeasonNameConnecter />
      <FoodTableConnecter />
    </div>
  </PageWithMenu>
);
