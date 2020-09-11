// --- Package Imports --- //
import React, { useEffect } from 'react';

// --- Redux --- //
import { useDispatch, useSelector } from 'react-redux';

// --- Store --- //
import {
  types as ListingTypes,
  operations as ListingOperations,
} from 'store/Listing';

// -- Material Ui --- //
import { Container } from '@material-ui/core';
// --- Components --- //
import { SearchResults, SearchInput } from './components';

/**
 * Main component for application
 */
function App() {
  const listing = useSelector((store) => store.listing);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listing.status === ListingTypes.STATUS_INIT) {
      dispatch(ListingOperations.getAllListings());
    }
  }, [dispatch, listing.status]);
  return (
    <Container maxWidth='md'>
      <SearchInput />
      <SearchResults results={listing.list} status={listing.status} />
    </Container>
  );
}

export default App;
