import React, { SFC } from 'react';

import './SearchBar.scss';

import { SearchBarProps } from './SearchBar.interface';
import {
  Input
} from '../../elements';

export const SearchBar: SFC<SearchBarProps> = ({
  onSearchChanged
}) => (
  <Input className='c-search-bar'
    onChange={(newSearchTerm) => onSearchChanged(newSearchTerm)}
    placeholder='Search'
    />
);
