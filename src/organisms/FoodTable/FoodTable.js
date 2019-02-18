import React, { Component } from 'react';

import './FoodTable.scss';

import {
  getCurrentSeasonIndex,
  getSeasonDataBySeasonIndex
} from '../../services';

import {
  ImageGrid
} from '../../molecules';

import {
  LoadingSpinner
} from '../../elements';

export class FoodTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodData: null
    };
  }
  async componentDidMount() {
    const foodData = await getSeasonDataBySeasonIndex(getCurrentSeasonIndex());
    this.setState({
      foodData
    });
  }

  render() {
    return this.state.foodData ?
      <ImageGrid data={this.state.foodData.food} />
      : <div className='c-food-table__loading-spinner-wrapper'>
        <LoadingSpinner />
      </div>
  }
}
