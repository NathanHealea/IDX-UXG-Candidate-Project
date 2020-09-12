// --- Package Imports --- //
import React from 'react';
import PropTypes from 'prop-types';

// --- Store --- //
import { types as ListingTypes } from 'store/Listing';

// --- Material ui --- //
import {
  CardContent,
  Button,
  Box,
  Link,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { default as BedIcon } from '@material-ui/icons/SingleBedOutlined';
import BathtubIcon from '@material-ui/icons/BathtubOutlined';
import { default as SquareFootIcon } from '@material-ui/icons/HomeWorkOutlined';
import ErrorIcon from '@material-ui/icons/Error';

// --- Components --- //
import {
  Card,
  CardMedia,
  CardHeader,
  CardActions,
  CardInfoList,
  CardInfoItem,
  CardMap,
} from './components';

const SearchResults = ({ results, status }) => {
  /**
   * Returns loading indicator
   */
  if (
    status === ListingTypes.STATUS_INIT ||
    status === ListingTypes.STATUS_FETCHING ||
    status === ListingTypes.STATUS_UPDATING
  ) {
    return (
      <Box textAlign='center' borderRadius={8} padding={8}>
        <CircularProgress />
        <Typography>loading...</Typography>
      </Box>
    );
  }

  /**
   * Returns Error indicator
   */
  if (status === ListingTypes.STATUS_ERROR) {
    return (
      <Box
        bgcolor={'error.light'}
        color={'common.white'}
        textAlign='center'
        borderRadius={8}
        padding={8}
      >
        <ErrorIcon fontSize='large' />
        <Typography>Error</Typography>
        <Typography variant='overline' component='p'>
          Information could not be displayed
        </Typography>
      </Box>
    );
  }

  return results.map((results) => (
    <Box my={2}>
      <Card>
        <CardMedia image={results.image}>
          <CardMap lat={results.latitude} lng={results.longitude} />
        </CardMedia>
        <CardContent component={Box} width='100%'>
          {results.isFavorite ? (
            <Typography variant='overview' component='p' color='primary'>
              Featured
            </Typography>
          ) : (
            ''
          )}
          <CardHeader
            title={results.listingPrice
              .toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })
              .replace('.00', '')}
            subheader={results.address}
          />

          <CardInfoList>
            <CardInfoItem
              icon={BedIcon}
              title={results.beds}
              subtitle='Bedrooms'
            />
            <CardInfoItem
              icon={BathtubIcon}
              title={
                results.partialBaths
                  ? `${results.fullBaths} Full / ${results.partialBaths} Partial`
                  : `${results.fullBaths} Full`
              }
              subtitle='Bathrooms'
            />
            <CardInfoItem
              icon={SquareFootIcon}
              title={results.sqFt}
              subtitle='Square Foot'
            />
          </CardInfoList>
          <CardActions>
            <Button component='a' href={results.detailsUrl} target='_blank'>
              View Details
            </Button>
            <Button
              component='a'
              href={`mailto:${results.listingAgentEmail}`}
              color='primary'
            >
              Contact {results.listingAgent.first} {results.listingAgent.last}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  ));
};

SearchResults.propTypes = {
  status: PropTypes.oneOf([
    ListingTypes.STATUS_INIT,
    ListingTypes.STATUS_FETCHING,
    ListingTypes.STATUS_SUCCESS,
    ListingTypes.STATUS_ERROR,
    ListingTypes.STATUS_UPDATING,
  ]),
  results: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      address: PropTypes.string,
      beds: PropTypes.number,
      fullBaths: PropTypes.number,
      partialBaths: PropTypes.number,
      sqFt: PropTypes.number,
      listingPrice: PropTypes.number,
      isFavorite: PropTypes.bool,
      listingAgent: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
      }),
      listingCompany: PropTypes.string,
      listingAgentEmail: PropTypes.string,
      latitude: PropTypes.string,
      longitude: PropTypes.string,
      image: PropTypes.string,
      detailsUrl: PropTypes.string,
    })
  ),
};

SearchResults.defaultProps = {
  results: [],
  status: ListingTypes.STATUS_INIT,
};

export default SearchResults;
