// --- Package Imports --- //
import React, { useEffect } from 'react';

// --- Redux --- //
import { useDispatch, useSelector } from 'react-redux';

// --- Store --- //
import {
  types as ListingTypes,
  operations as ListingOperations,
} from 'store/Listing';

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
    <div className='App'>
      {listing.list.map((house) => (
        <p>{JSON.stringify(house)}</p>
      ))}
    </div>
  );
}

export default App;
