import React from 'react';

import {
  IntroPage,
  FoodTablePage,
  FoodDetailsPage
} from '../components-pages';
import './App.scss';

import { Provider } from 'react-redux';
import { store, storeHistory } from '../store/reducers';

import { Route, Switch } from 'react-router';

import {
  FOOD_TABLE_URL,
  LANDING_URL,
  FOOD_DETAILS_URL
} from '../const';

import { ConnectedRouter } from 'connected-react-router';

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={storeHistory}>
      <div className='c-app'>
        <Switch>
          <Route path={LANDING_URL} component={IntroPage} exact />
          <Route path={FOOD_TABLE_URL} component={FoodTablePage} />
          <Route path={`${FOOD_DETAILS_URL}/:id`} component={FoodDetailsPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);
