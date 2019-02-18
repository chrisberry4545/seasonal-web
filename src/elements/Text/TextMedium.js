import React from 'react';
import './TextMedium.scss';

export const TextMedium = ({ className, children }) => (
  <span className={`${(className || '')} c-text-medium`}>
    { children }
  </span>
);
