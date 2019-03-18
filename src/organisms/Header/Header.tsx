import React, { SFC } from 'react';

import './Header.scss';

import {
  BareButton,
  BurgerIcon,
  TextHeadingLarge
} from '../../elements';
import {
  SearchBarConnecter
} from '../';
import { IHeaderDispatchProps } from './Header.interface';

export const Header: SFC<IHeaderDispatchProps> = ({
  onMenuOpen
}) => (
  <header className='c-header'>
    <BareButton className='c-header__btn' onClick={onMenuOpen}>
      <BurgerIcon />
    </BareButton>
    <h1 className='c-header__text'>
      <TextHeadingLarge>
        Eat Seasonal
      </TextHeadingLarge>
    </h1>
    <SearchBarConnecter />
  </header>
);
