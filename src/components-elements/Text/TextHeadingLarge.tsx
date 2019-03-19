import React, { SFC } from 'react';
import './TextHeadingLarge.scss';
import { ITextInterface } from './Text.interface';

export const TextHeadingLarge: SFC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-large`}>
    { children }
  </span>
);
