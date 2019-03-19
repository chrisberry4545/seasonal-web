import React, { SFC } from 'react';
import './PrimaryButton.scss';

export const PrimaryButton: SFC<{
  className?: string,
  onClick?: () => void
}> = ({
  className,
  children,
  onClick
}) => (
  <button className={`${(className || '')} c-primary-button`}
    onClick={onClick}>
    { children }
  </button>
);
