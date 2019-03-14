import React from 'react';

import {
  SeasonMenuConnecter,
  HeaderConnecter
} from '../organisms';

import {
  FoodPage
} from '../pages';
import './App.scss';

import { Provider } from 'react-redux';
import { store } from '../store/reducers';

export const App = () => (
  <Provider store={store}>
    <div className='c-app'>
      <HeaderConnecter />
      <SeasonMenuConnecter />
      <FoodPage />
    </div>
  </Provider>
);
