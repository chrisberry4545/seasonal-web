import React from 'react';

import {
  Header
} from '../organisms';

import {
  FoodPage
} from '../pages';
import './App.scss';

export const App = () => (
  <div className='c-app'>
    <Header />
    <FoodPage />
  </div>
);
