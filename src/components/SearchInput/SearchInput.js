// --- Package Imports --- //
import React from 'react';
import PropTypes from 'prop-types';

// --- Material Ui --- //
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = ({ results, status }) => (
  <TextField
    id='standard-required'
    label='Search'
    margin='normal'
    variant='outlined'
    fullWidth
    InputProps={{
      endAdornment: (
        <InputAdornment position='end'>
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

export default SearchInput;
