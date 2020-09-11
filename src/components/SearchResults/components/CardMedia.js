// --- Package Imports --- //
// import React from 'react';

// --- Material Ui Imports --- //

import { CardMedia, withStyles } from '@material-ui/core';

export default withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.text.secondary,
    width: 'calc(100%/ 2)',
    paddingTop: 'calc((9/16) * (100%/ 2))',

    [theme.breakpoints.only('sm')]: {
      minWidth: 400,
      maxWidth: 400,
      width: 'calc(100%/ 2)',
      paddingTop: 'calc((1/1) * (100%/ 2))',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      paddingTop: 'calc((9/16) * 100% )',
    },
  },
}))(CardMedia);
