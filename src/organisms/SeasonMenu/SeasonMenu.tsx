import React from 'react';

import './SeasonMenu.scss';

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
import { SeasonMenuProps } from './SeasonMenu.interface';

const OverlayFadeInOutAnimation = fadeInOutAnimation();

export const SeasonMenu = ({
  allSeasonData,
  isLoading,
  isMenuOpen,
  onClose
}: SeasonMenuProps) => (
  <div>
    <PoseGroup>
      {
        isMenuOpen &&
        <OverlayFadeInOutAnimation key='season-menu-overlay'
          className='c-season-menu__overlay'
          onClick={onClose} />
      }
    </PoseGroup>
    <nav
      className={`c-season-menu ${isMenuOpen ? 'c-season-menu--is-open' : ''}`}>
      {
        !isLoading
          ? allSeasonData && allSeasonData.map(({ name }) => (
              <BareButton key={name} className='c-season-menu__button'>
                <TextMedium>{ name }</TextMedium>
              </BareButton>
            ))
          : <div className='c-season-menu__loading-spinner-wrapper'>
            <LoadingSpinner />
          </div>
      }
      <BareButton className='c-season-menu__close-btn'
        onClick={onClose}>
        <CrossIcon />
      </BareButton>
    </nav>
  </div>
);
