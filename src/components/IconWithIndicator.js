import React from 'react';
import Box from "@material-ui/core/Box";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    cursor: 'pointer',
  },
  number: {
    fontSize: '12px',
    lineHeight: '23px',
    marginLeft: '4px',
    color: theme.palette.gray
  }
}));

const IconWithIndicator = ({ number, Icon }) => {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" className={classes.wrapper}>
      <Icon />
      <Typography className={classes.number}>{number}</Typography>
    </Box>
)};

export default IconWithIndicator
