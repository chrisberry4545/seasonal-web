import React, { SFC } from 'react';

import './CurrentSeasonName.scss';

import {
  TextHeadingSmall
} from '../../components-elements';
import { ICurrentSeasonName } from './CurrentSeasonName.interface';

export const CurrentSeasonName: SFC<ICurrentSeasonName> = ({
  currentSeasonName
}) => (
  <TextHeadingSmall className='c-current-season-name'>
    {currentSeasonName}
  </TextHeadingSmall>);
