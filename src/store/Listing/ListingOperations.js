// --- Package Imports --- //
import Axios from 'axios';

// --- Listing Store --- //
import * as Actions from './ListingActions';
import { IsSuccess } from 'store/utils';

/**
 * Fetch listings from api
 */
const API_ENDPOINT = 'https://next.json-generator.com/api/json/get/4JejqZvkY';

export const getAllListings = () => {
  return async (dispatch) => {
    // set dispatch to fetching
    dispatch(Actions.status.setToFetching);
    const response = await Axios.get(API_ENDPOINT);

    if (IsSuccess(response.status)) {
      dispatch(Actions.list.set(response.data));
      dispatch(Actions.status.setToSuccess);
    } else {
      dispatch(Actions.status.setToError);
    }
  };
};
