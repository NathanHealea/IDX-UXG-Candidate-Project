// --- Package Imports --- //
import React from 'react';
import clsx from 'clsx';

// --- Material Ui --- //
import { IconButton, makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// --- Styles --- //
const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const CardShowDetails = ({ expanded, handleExpandClick }) => {
  const classes = useStyles();
  return (
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label='show more'
    >
      <ExpandMoreIcon />
    </IconButton>
  );
};

export default CardShowDetails;
