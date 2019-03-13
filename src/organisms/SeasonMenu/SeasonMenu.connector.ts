import { connect } from 'react-redux';
import {
  SeasonMenu
} from './SeasonMenu';
import {
  selectIsMenuOpen,
  closeMenu,
  selectAllBasicSeasonData,
  selectIsBasicSeasonDataLoading
} from '../../store';

import { State } from '../../interfaces';
import { SeasonMenuInputProps, SeasonMenuDispatchProps } from './SeasonMenu.interface';
import { Dispatch } from 'redux';

const mapStateToProps = (
  state: State
): SeasonMenuInputProps => ({
  allBasicSeasonData: selectAllBasicSeasonData(state),
  isLoading: selectIsBasicSeasonDataLoading(state),
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
