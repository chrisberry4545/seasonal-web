import React from 'react';
import './TextHeadingMedium.scss';

export const TextHeadingMedium = ({ className, children }) => (
  <span className={`${(className || '')} c-text-heading-medium`}>
    { children }
  </span>
);
