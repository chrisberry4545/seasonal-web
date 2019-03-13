import React, { SFC } from 'react';
import './TextHeadingLarge.scss';
import { TextInterface } from './Text.interface';

export const TextHeadingLarge: SFC<TextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-heading-large`}>
    { children }
  </span>
);
