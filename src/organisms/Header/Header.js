import React from 'react';

import './Header.scss';

import {
  BareButton,
  BurgerIcon,
  TextHeadingLarge
} from '../../elements';

export const Header = () => (
  <header className='c-header'>
    <BareButton className='c-header__btn'>
      <BurgerIcon />
    </BareButton>
    <h1 className='c-header__text'>
      <TextHeadingLarge>
        Eat Seasonal
      </TextHeadingLarge>
    </h1>
  </header>
);
