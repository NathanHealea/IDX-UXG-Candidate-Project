// --- Utils --- //
import { createAction } from '@reduxjs/toolkit';

// --- Listing Store --- //
import * as types from './ListingTypes';

// --- Status Actions --- //
const setStatus = createAction(types.STATUS_SET);
const setStatusToFetching = setStatus(types.STATUS_FETCHING);
const setStatusToUpdating = setStatus(types.STATUS_UPDATING);
const setStatusToError = setStatus(types.STATUS_ERROR);
const setStatusToSuccess = setStatus(types.STATUS_SUCCESS);

export const status = {
  set: setStatus,
  setToFetching: setStatusToFetching,
  setToUpdating: setStatusToUpdating,
  setToError: setStatusToError,
  setToSuccess: setStatusToSuccess,
};

// --- List Actions --- //
const setList = createAction(types.LIST_SET);

export const list = {
  set: setList,
};
