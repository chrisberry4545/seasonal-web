import React, { SFC } from 'react';

import './ViewAppLinks.scss';

import {
  AndroidAppDownload
} from '../AndroidAppDownload/AndroidAppDownload';

import {
  ViewWebAppVersionConnector
} from '../ViewWebAppVersion/ViewWebAppVersion.connector';

export const ViewAppLinks: SFC<{}> = () => (
  <div className='c-view-app-links'>
    <ViewWebAppVersionConnector />
    <AndroidAppDownload />
  </div>
);
