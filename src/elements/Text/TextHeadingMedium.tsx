import React, { SFC } from 'react';
import './TextHeadingMedium.scss';
import { TextInterface } from './Text.interface';

export const TextHeadingMedium: SFC<TextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-medium`}>
    { children }
  </span>
);
