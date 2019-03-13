import React, { SFC } from 'react';
import './TextMedium.scss';
import { TextInterface } from './Text.interface';

export const TextMedium: SFC<TextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-medium`}>
    { children }
  </span>
);
