import React, { Component } from 'react';

import './Header.scss';

import {
  BareButton,
  BurgerIcon,
  TextHeadingLarge
} from '../../elements';

import {
  SeasonMenu
} from '../SeasonMenu/SeasonMenu';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  showMenu() {
    this.setState({
      isMenuOpen: true
    });
  }

  closeMenu() {
    this.setState({
      isMenuOpen: false
    });
  }

  render() {
    return (
      <header className='c-header'>
        <BareButton className='c-header__btn' onClick={() => this.showMenu()}>
          <BurgerIcon />
        </BareButton>
        <h1 className='c-header__text'>
          <TextHeadingLarge>
            Eat Seasonal
          </TextHeadingLarge>
        </h1>
        <SeasonMenu key='season-menu' isOpen={this.state.isMenuOpen}
          onClose={() => this.closeMenu()} />
      </header>
    );
  }
}
