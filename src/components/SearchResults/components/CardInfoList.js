// --- Package Imports --- //
// import React from 'react';

// --- Material Ui Imports --- //

import { List, withStyles } from '@material-ui/core';

export default withStyles((theme) => ({
  root: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: -theme.spacing(2),
    marginRight: -theme.spacing(2),
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
    },

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}))(List);
