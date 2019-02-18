import React from 'react';
import './TextHeadingLarge.scss';

export const TextHeadingLarge = ({ className, children }) => (
  <span className={`${(className || '')} c-text-heading-large`}>
    { children }
  </span>
);
