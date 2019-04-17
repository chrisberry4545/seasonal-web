import React, { SFC } from 'react';

import './LoadingSpinner.scss';

export const LoadingSpinner: SFC<{}> = () => (
  <div className='c-loading-spinner'>
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
  </div>
);
