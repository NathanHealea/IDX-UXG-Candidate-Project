// --- Package Imports --- //
// import React from 'react';

// --- Material Ui Imports --- //

import { Card, withStyles } from '@material-ui/core';

export default withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}))(Card);
