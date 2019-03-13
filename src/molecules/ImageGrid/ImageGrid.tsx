import React, { SFC } from 'react';

import './ImageGrid.scss';

import {
  ImageGridItem
} from '../ImageGridItem/ImageGridItem';
import { ImageGridProps } from './ImageGrid.interface';

export const ImageGrid: SFC<ImageGridProps> = ({ data }) => (
  <div className='c-image-grid'>
    {
      data && data.map((item) => (
        <ImageGridItem
          key={item.name}
          imageUrlSmall={item.imageUrlSmall}
          name={item.name} />
      ))
    }
  </div>
);
