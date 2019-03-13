import { connect } from 'react-redux';
import {
  SeasonMenu
} from './SeasonMenu';
import {
  selectIsMenuOpen,
  closeMenu,
  selectAllSeasonData,
  selectIsSeasonDataLoading
} from '../../store';

import { State } from '../../interfaces';
import { SeasonMenuInputProps, SeasonMenuDispatchProps } from './SeasonMenu.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: State
): SeasonMenuInputProps => ({
  allSeasonData: selectAllSeasonData(state),
  isLoading: selectIsSeasonDataLoading(state),
  isMenuOpen: selectIsMenuOpen(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): SeasonMenuDispatchProps => ({
  onClose: () => dispatch(closeMenu())
});

export const SeasonMenuConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonMenu);
