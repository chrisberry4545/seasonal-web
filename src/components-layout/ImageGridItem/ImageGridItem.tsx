import React, { SFC } from 'react';

import './ImageGridItem.scss';

import {
  TextMedium
} from '../../components-elements';

import {
  BackgroundImageWithLoadingSpinner
} from '../../components-elements';
import { IImageGridItem } from './ImageGridItem.interface';

export const ImageGridItem: SFC<IImageGridItem> = ({
  id,
  imageUrlSmall,
  onClick,
  name,
  skipAnimation
}) => (
  <div onClick={() => onClick && onClick(id)}
    className='c-image-grid-item'>
    <div className='c-image-grid-item__inner'>
      <div className='c-image-grid-item__image'>
        <BackgroundImageWithLoadingSpinner
          src={imageUrlSmall} skipAnimation={skipAnimation}/>
      </div>
      <TextMedium className='c-image-grid-item__text'>
        {name}
      </TextMedium>
    </div>
  </div>
);
