// --- Package Imports --- //
import React, { useState } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { Box, Fade, Fab, makeStyles, withStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  map: {
    width: '100%',
    height: '100%',
  },
});

const MapWrapper = withStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    zIndex: 10,
  },
}))(Box);

const MapIconWrapper = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: theme.spacing(2),
    zIndex: 20,
  },
}))(Box);

const CardMap = ({ lat, lng, zoom: defaultZoom = 13 }) => {
  const classes = useStyles();
  const [zoom, setZoom] = useState(defaultZoom);
  const [position, setPosition] = useState([lat, lng]);
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => setShowMap(!showMap);

  return (
    <>
      <MapIconWrapper>
        <Fab color='primary' size={'small'} onClick={handleShowMap}>
          {showMap ? <CloseIcon /> : <LocationOnIcon />}
        </Fab>
      </MapIconWrapper>
      <Fade in={showMap}>
        <MapWrapper>
          <Map center={position} zoom={zoom} className={classes.map}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </Map>
        </MapWrapper>
      </Fade>
    </>
  );
};

export default CardMap;
