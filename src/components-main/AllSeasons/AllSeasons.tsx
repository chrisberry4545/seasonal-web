import React from 'react';
import './AllSeasons.scss';
import {
  IAllSeasonsProps
} from './AllSeasons.interface';
import { SeasonNameView, ImageGrid } from '../../components-layout';
import { LoadingSpinner } from '../../components-elements';

export const AllSeasons = ({
  isLoading,
  seasons,
  onFoodClick
}: IAllSeasonsProps) => (
  isLoading
    ? <div className='c-all-seasons__loading-spinner-wrapper'>
      <LoadingSpinner />
    </div>
    : <div className='c-all-seasons'>
      {
        seasons && seasons.map(({ name, food }) => (
          <div className='c-all-seasons__season' key={name}>
            <SeasonNameView name={name}></SeasonNameView>
            <ImageGrid data={food} onClick={onFoodClick} />
          </div>
        ))
      }
    </div>
);
