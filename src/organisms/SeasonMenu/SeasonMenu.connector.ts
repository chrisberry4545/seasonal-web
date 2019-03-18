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
  selectCurrentSeasonIndex
} from '../../store';

import { IState } from '../../interfaces';
import {
  ISeasonMenuInputProps,
  ISeasonMenuDispatchProps
} from './SeasonMenu.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: IState
): ISeasonMenuInputProps => ({
  allBasicSeasonData: selectAllBasicSeasonData(state),
  currentSeasonIndex: selectCurrentSeasonIndex(state),
  isLoading: selectIsBasicSeasonDataLoading(state),
  isMenuOpen: selectIsMenuOpen(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISeasonMenuDispatchProps => ({
  onClose: () => dispatch(closeMenu()),
  onSeasonSelected: (seasonIndex: number) => dispatch(selectSeason(seasonIndex))
});

export const SeasonMenuConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonMenu);
