import React, { SFC } from 'react';

import './ImageGridItem.scss';

import {
  TextMedium
} from '../../elements';

import {
  BackgroundImageWithLoadingSpinner
} from '../BackgroundImageWithLoadingSpinner/BackgroundImageWithLoadingSpinner';
import { ImageGridItemProps } from './ImageGridItem.interface';

export const ImageGridItem: SFC<ImageGridItemProps> = ({
  imageUrlSmall,
  name
}) => (
  <div className='c-image-grid-item'>
    <div className='c-image-grid-item__inner'>
      <div className='c-image-grid-item__image'>
        <BackgroundImageWithLoadingSpinner src={imageUrlSmall}/>
      </div>
      <TextMedium className='c-image-grid-item__text'>
        {name}
      </TextMedium>
    </div>
  </div>
);
