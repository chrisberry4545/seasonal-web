import React from 'react';

import {
  IntroPage,
  FoodPage
} from '../pages';
import './App.scss';

import { Provider } from 'react-redux';
import { store, storeHistory } from '../store/reducers';

import { Route, Switch } from 'react-router';

import {
  FOOD_URL,
  LANDING_URL
} from '../const';

import { ConnectedRouter } from 'connected-react-router';

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={storeHistory}>
      <div className='c-app'>
        <Switch>
          <Route path={LANDING_URL} component={IntroPage} exact />
          <Route path={FOOD_URL} component={FoodPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);
