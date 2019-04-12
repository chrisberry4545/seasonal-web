import { connect } from 'react-redux';
import {
  SeasonMenu
} from './SeasonMenu';
import {
  selectIsMenuOpen,
  closeMenu,
  selectAllBasicSeasonData,
  selectIsBasicSeasonDataLoading,
  selectSeason,
  selectCurrentSeasonIndex,
  goToAllSeasonsView
} from '@chrisb-dev/seasonal-shared';

import { IState } from '../../interfaces';
import {
  ISeasonMenuInputProps,
  ISeasonMenuDispatchProps
} from './SeasonMenu.interface';
import { Dispatch } from 'redux';

import { selectIsCurrentRouteAllSeasons } from '../../store';

const mapStateToProps = (
  state: IState
): ISeasonMenuInputProps => ({
  allBasicSeasonData: selectAllBasicSeasonData(state),
  currentSeasonIndex: selectCurrentSeasonIndex(state),
  isCurrentRouteAllSeasons: selectIsCurrentRouteAllSeasons(state),
  isLoading: selectIsBasicSeasonDataLoading(state),
  isMenuOpen: selectIsMenuOpen(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonMenuDispatchProps => ({
  onAllSeasonsSelected: () => dispatch(goToAllSeasonsView()),
  onClose: () => dispatch(closeMenu()),
  onSeasonSelected: (
    seasonIndex: number
  ) => dispatch(selectSeason(seasonIndex))
});

export const SeasonMenuConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonMenu);
