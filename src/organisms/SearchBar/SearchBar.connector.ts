import { connect } from 'react-redux';
import {
  SearchBar
} from './SearchBar';
import {
  searchBarChanged
} from '../../store';
import { ISearchBarDispatchProps } from './SearchBar.interface';
import { Dispatch } from 'redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISearchBarDispatchProps => ({
  onSearchChanged: (newSearchTerm: string) => (
    dispatch((searchBarChanged(newSearchTerm)))
  )
});

export const SearchBarConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
