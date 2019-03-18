import React, { Component } from 'react';

import './BackgroundImageWithLoadingSpinner.scss';

import {
  loadImage
} from '../../services/image-loader.service';

import {
  LoadingSpinner
} from '../../elements';

import {
  fadeInOutAnimation
} from '../../helpers';

import { PoseGroup } from 'react-pose';

const FadeInOutAnimation = fadeInOutAnimation();

interface IBackgroundImageWithLoadingSpinnerPropsInterface {
  src: string;
}
interface IBackgroundImageWithLoadingSpinnerStateInterface {
  isVisible: boolean;
}

export class BackgroundImageWithLoadingSpinner
extends Component<
  IBackgroundImageWithLoadingSpinnerPropsInterface,
  IBackgroundImageWithLoadingSpinnerStateInterface
> {
  constructor(props: IBackgroundImageWithLoadingSpinnerPropsInterface) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  public async componentDidMount() {
    await loadImage(this.props.src);
    this.setState({
      isVisible: true
    });
  }

  public render() {
    return (
      <PoseGroup>
        {
          this.state.isVisible
            ? <FadeInOutAnimation key='background-image-fade-in-out'
              className='c-background-image-with-loading-spinner'
              style={{ backgroundImage: `url(${this.props.src})` }}>
              { this.props.children }
            </FadeInOutAnimation>
            : <FadeInOutAnimation key='loading-spinner-fade-in-out'
              className='c-background-image-with-loading-spinner'>
              <LoadingSpinner />
            </FadeInOutAnimation>
        }
      </PoseGroup>
    );
  }
}
