import React, { SFC } from 'react';

import './ImageGrid.scss';

import {
  ImageGridItem
} from '../ImageGridItem/ImageGridItem';
import { ImageGridProps } from './ImageGrid.interface';
import { TextMedium } from '../../elements';

export const ImageGrid: SFC<ImageGridProps> = ({ data }) => (
  <div className='c-image-grid'>
    {
      data && data.length
        ? data.map((item) => (
          <ImageGridItem
            key={item.name}
            imageUrlSmall={item.imageUrlSmall}
            name={item.name} />
        ))
        : <TextMedium className='c-image-grid__no-results'>
            No results found
          </TextMedium>
    }
  </div>
);
