import React, { SFC } from 'react';
import './TextHeadingMedium.scss';
import { ITextInterface } from './Text.interface';

export const TextHeadingMedium: SFC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-medium`}>
    { children }
  </span>
);
