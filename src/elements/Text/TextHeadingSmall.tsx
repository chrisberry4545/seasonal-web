import React, { SFC } from 'react';
import './TextHeadingSmall.scss';
import { ITextInterface } from './Text.interface';

export const TextHeadingSmall: SFC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-small`}>
    { children }
  </span>
);
