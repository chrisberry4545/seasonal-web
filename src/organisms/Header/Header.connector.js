import { connect } from 'react-redux';
import {
  Header
} from './Header';
import {
  openMenu
} from '../../store';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onMenuOpen: () => dispatch(openMenu())
});

export const HeaderConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
