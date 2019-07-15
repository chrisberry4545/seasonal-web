import React, { FC } from 'react';

import './ImageGrid.scss';

import {
  ImageGridItem
} from '../ImageGridItem/ImageGridItem';
import { IImageGrid } from './ImageGrid.interface';
import { TextMedium } from '../../components-elements';

const isEven = (index: number) => index % 2 === 0;

const hasBorder = (totalLength: number, index: number) =>
  index < totalLength - (isEven(totalLength) ? 2 : 1);

export const ImageGrid: FC<IImageGrid> = ({
  data,
  onClick,
  skipAnimation
}) => (
  <div className='c-image-grid'>
    {
      data && data.length
        ? data.map((item, index) => (
          <ImageGridItem
            key={item.name}
            {...item}
            onClick={onClick}
            skipAnimation={skipAnimation}
            hasBottomBorder={hasBorder(data.length, index)} />
        ))
        : <TextMedium className='c-image-grid__no-results'>
            No results found
          </TextMedium>
    }
  </div>
);
