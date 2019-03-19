import React, { SFC } from 'react';

import {
  PrimaryButton
} from '../../components-elements';

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
