import React, { SFC } from 'react';

import './PageLayout.scss';

export const PageLayout: SFC<{}> = ({
  children
}) => (
  <div className='c-page-layout'>
    { children }
  </div>
);
