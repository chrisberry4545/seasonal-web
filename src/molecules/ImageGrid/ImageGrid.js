import React from 'react';

import './ImageGrid.scss';

import {
  ImageGridItem
} from '../ImageGridItem/ImageGridItem';

export const ImageGrid = ({ data }) => (
  <div className='c-image-grid'>
    {
      data.map((item) => (
        <ImageGridItem key={item.name} item={item}/>
      ))
    }
  </div>
);
