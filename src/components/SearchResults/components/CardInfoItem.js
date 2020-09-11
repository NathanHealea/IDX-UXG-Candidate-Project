// --- Package Import --- //
import React from 'react';

// --- Material Ui Imports --- //
import {
  ListItem as MuiListItem,
  Box,
  Typography,
  ListItemAvatar as MuiListItemAvatar,
  withStyles,
} from '@material-ui/core';

const ListItem = withStyles((theme) => ({
  root: {
    paddingLeft: 0,
    paddingRight: 0,
    width: 'auto',
    margin: `0 ${theme.spacing(2)}px`,
    flexDirection: 'column',
  },
}))(MuiListItem);

const ListItemAvatar = withStyles((theme) => ({
  root: {
    minWidth: theme.spacing(5),
  },
}))(MuiListItemAvatar);

const CardInfoItem = ({ icon: Icon, subtitle, title }) => {
  return (
    <ListItem>
      <Box width='100%' display='flex' alignItems='center'>
        <ListItemAvatar>
          <Icon fontSize='large' />
        </ListItemAvatar>
        <Typography>{title}</Typography>
      </Box>
      <Box width='100%' display='flex' alignItems='center'>
        <Typography variant='overline' component='p' color='textSecondary'>
          {subtitle}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default CardInfoItem;
