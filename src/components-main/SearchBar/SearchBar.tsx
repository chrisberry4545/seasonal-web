import React, { SFC } from 'react';

import './SearchBar.scss';

import { ISearchBarDispatchProps } from './SearchBar.interface';
import {
  Input
} from '../../components-elements';

export const SearchBar: SFC<ISearchBarDispatchProps> = ({
  onSearchChanged
}) => (
  <Input className='c-search-bar'
    onChange={(newSearchTerm) => onSearchChanged(newSearchTerm)}
    placeholder='Search'
    />
);
