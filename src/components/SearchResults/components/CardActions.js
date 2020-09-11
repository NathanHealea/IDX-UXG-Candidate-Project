// --- Package Imports --- //
// import React from 'react';

// --- Material Ui Imports --- //

import { CardActions, withStyles } from '@material-ui/core';

export default withStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.only('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down(400)]: {
      flexDirection: 'column',
    },
  },
}))(CardActions);
