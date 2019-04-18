import React, { Fragment, FC } from 'react';

import './SeasonsForFood.scss';

import {
  TextMedium,
  TextHeadingMedium,
  TextSmall,
  BareButton
} from '../../components-elements';

import { ISeasonForFoodProps } from './SeasonsForFood.interface';

export const SeasonsForFood: FC<ISeasonForFoodProps> = ({
  isLoading,
  seasonsSelectedForFood,
  onSeasonSelected
}) => (
  !isLoading
    ? <Fragment>
    <TextHeadingMedium
      className='c-season-for-food__list-heading'>
      When are they in season?
    </TextHeadingMedium>
    <div className='c-season-for-food__list'>
      {
        seasonsSelectedForFood && seasonsSelectedForFood.map((
          {
            isSelected,
            name
          },
          seasonIndex
        ) => (
          <BareButton
            key={name}
            className={
              `c-season-for-food__season` +
                (
                  isSelected
                    ? ` c-season-for-food__season--selected`
                    : ''
                )
              }
            onClick={ () => onSeasonSelected(seasonIndex) }>
            <TextMedium>
              { name.substring(0, 3) }
            </TextMedium>
          </BareButton>
        ))
      }
    </div>
    <div
      className={`c-season-food__in-season-key ` +
        `c-season-food__in-season-key--in-season`
      }>
      <TextSmall className='c-season-food__in-season-key__text'>
        In season
      </TextSmall>
    </div>
    <div
      className='c-season-food__in-season-key'>
      <TextSmall className='c-season-food__in-season-key__text'>
        Not in season
      </TextSmall>
    </div>
  </Fragment>
  : null
);
