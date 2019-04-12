import React from 'react';
import './SeasonNameView.scss';
import {
  ISeasonNameViewProps
} from './SeasonNameView.interface';
import { TextHeadingSmall } from '../../components-elements';

export const SeasonNameView = ({
  name
}: ISeasonNameViewProps) => (
  <TextHeadingSmall className='c-season-name-view'>
    {name}
  </TextHeadingSmall>
);
