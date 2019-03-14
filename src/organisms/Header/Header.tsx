import React, { SFC } from 'react';

import './Header.scss';

import {
  BareButton,
  BurgerIcon,
  TextHeadingLarge
} from '../../elements';
import { HeaderProps } from './Header.interface';

export const Header: SFC<HeaderProps> = ({
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
  </header>
);
