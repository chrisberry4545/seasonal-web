import { connect } from 'react-redux';
import {
  Header
} from './Header';
import {
  openMenu
} from '../../store';
import { IHeaderDispatchProps } from './Header.interface';
import { Dispatch } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch
): IHeaderDispatchProps => ({
  onMenuOpen: () => dispatch(openMenu())
});

export const HeaderConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);