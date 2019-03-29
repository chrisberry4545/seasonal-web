import React, { SFC } from 'react';
import './TextSmall.scss';
import { ITextInterface } from './Text.interface';

export const TextSmall: SFC<ITextInterface> = ({
  className,
  children
}) => (
  <span className={`${(className || '')} c-text-small`}>
    { children }
  </span>
);
