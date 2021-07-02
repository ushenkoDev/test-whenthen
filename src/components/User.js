import React from 'react';
import {makeStyles, Box, Avatar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    alignItems: 'center',
  },
  avatar: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  name: {
    fontSize: '14px',
    lineHeight: '23px',
    color: theme.palette.gray
  }
}))

const User = ({ image, name }) => {
  const classes = useStyles();

  return (
  <Box display="flex" className={classes.wrapper}>
    <Avatar src={image} className={classes.avatar}/>
    <Typography className={classes.name}>{name}</Typography>
  </Box>
)};

export default User;
