import React, { SFC } from 'react';

import './CurrentSeasonName.scss';

import { ICurrentSeasonName } from './CurrentSeasonName.interface';
import { SeasonNameView } from '../../components-layout';

export const CurrentSeasonName: SFC<ICurrentSeasonName> = ({
  currentSeasonName,
  isLoading
}) => (
  !isLoading
    ? <SeasonNameView name={currentSeasonName} />
    : null
);
