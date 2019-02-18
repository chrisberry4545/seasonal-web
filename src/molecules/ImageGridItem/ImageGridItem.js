import React from 'react';

import './ImageGridItem.scss';

import {
  TextMedium
} from '../../elements';

import {
  BackgroundImageWithLoadingSpinner
} from '../BackgroundImageWithLoadingSpinner/BackgroundImageWithLoadingSpinner';

export const ImageGridItem = ({ item }) => (
  <div className='c-image-grid-item'>
    <div className='c-image-grid-item__inner'>
      <div className='c-image-grid-item__image'>
        <BackgroundImageWithLoadingSpinner src={item.imageUrlSmall}/>
      </div>
      <TextMedium className='c-image-grid-item__text'>
        {item.name}
      </TextMedium>
    </div>
  </div>
);
