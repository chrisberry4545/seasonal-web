import React, { SFC } from 'react';

import {
  PrimaryButton
} from '../../elements';

import {
  IViewWebAppVersionDispatchProps
} from './ViewWebAppVersion.interface';

export const ViewWebAppVersion: SFC<IViewWebAppVersionDispatchProps> = ({
  onGoToWebVersion
}) => (
  <PrimaryButton onClick={onGoToWebVersion}>
    To web version
  </PrimaryButton>
);
