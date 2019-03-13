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

const mapStateToProps = (state) => ({
  allSeasonData: selectAllSeasonData(state),
  isLoading: selectIsSeasonDataLoading(state),
  isMenuOpen: selectIsMenuOpen(state)
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(closeMenu())
});

export const SeasonMenuConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeasonMenu);
