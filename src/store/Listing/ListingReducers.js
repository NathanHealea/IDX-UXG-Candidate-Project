// --- Listing Store --- //
import * as types from './ListingTypes';
import * as states from './ListingStates';

// -- Imports --- //
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const status = createReducer(states.status, {
  [types.STATUS_SET]: (state, action) => action.payload || state,
});

const list = createReducer(states.list, {
  [types.LIST_SET]: (state, action) => action.payload || state,
});

export default combineReducers({ status, list });
