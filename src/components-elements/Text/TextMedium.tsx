import React, { SFC } from 'react';
import './TextMedium.scss';
import { ITextInterface } from './Text.interface';

export const TextMedium: SFC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-medium`}>
    { children }
  </span>
);
