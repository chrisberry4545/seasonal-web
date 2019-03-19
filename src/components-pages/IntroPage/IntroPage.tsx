import React from 'react';

import './IntroPage.scss';

import {
  ViewAppLinks,
  WhyEatSeasonal
} from '../../components-main';

export const IntroPage = () => (
  <div className='c-intro-page'>
    <div className='c-intro-page__top-section'>
      <img className='c-intro-page__splash-image' src='/splash.png'/>
      <ViewAppLinks />
    </div>
    <WhyEatSeasonal />
    <div className='c-intro-page__mobile-extra-app-links'>
      <ViewAppLinks />
    </div>
  </div>
);
