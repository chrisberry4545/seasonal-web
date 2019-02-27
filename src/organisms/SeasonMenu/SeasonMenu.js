import React, { Component } from 'react';

import './SeasonMenu.scss';

import {
  getAllSeasonData
} from '../../services';

import {
  BareButton,
  CrossIcon,
  TextMedium,
  LoadingSpinner
} from '../../elements';

import {
  fadeInOutAnimation
} from '../../helpers';
import { PoseGroup } from 'react-pose';

const OverlayFadeInOutAnimation = fadeInOutAnimation();

export class SeasonMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSeasonData: null
    };
  }

  async componentDidMount() {
    const allSeasonData = await getAllSeasonData();
    this.setState({
      allSeasonData
    });
  }

  render() {
    const { isOpen } = this.props;
    return (
      <div>
        <PoseGroup>
          {
            isOpen &&
            <OverlayFadeInOutAnimation key='season-menu-overlay'
              className='c-season-menu__overlay'
              onClick={this.props.onClose} />
          }
        </PoseGroup>
        <nav
          className={`c-season-menu ${isOpen ? 'c-season-menu--is-open' : ''}`}>
          {
            this.state.allSeasonData
              ? this.state.allSeasonData.map(({ name }) => (
                  <BareButton key={name} className='c-season-menu__button'>
                    <TextMedium>{ name }</TextMedium>
                  </BareButton>
                ))
              : <div className='c-season-menu__loading-spinner-wrapper'>
                <LoadingSpinner />
              </div>
          }
          <BareButton className='c-season-menu__close-btn'
            onClick={this.props.onClose}>
            <CrossIcon />
          </BareButton>
        </nav>
      </div>
    );
  }
}
