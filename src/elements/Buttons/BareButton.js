import React from 'react';
import './BareButton.scss';

export const BareButton = ({ className, children, onClick }) => (
  <button className={`${(className || '')} c-bare-button`} onClick={onClick}>
    { children }
  </button>
);
