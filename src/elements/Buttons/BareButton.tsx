import React, { SFC } from 'react';
import './BareButton.scss';

export const BareButton: SFC<{
  className?: string,
  onClick?: () => void,
}> = ({
  className,
  children,
  onClick
}) => (
  <button className={`${(className || '')} c-bare-button`} onClick={onClick}>
    { children }
  </button>
);
