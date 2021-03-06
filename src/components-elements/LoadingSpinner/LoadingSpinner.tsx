import React, { FC } from 'react';

import './LoadingSpinner.scss';

export const LoadingSpinner: FC<{}> = () => (
  <div className='c-loading-spinner'>
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
    <div className='c-loading-spinner__dot' />
  </div>
);
