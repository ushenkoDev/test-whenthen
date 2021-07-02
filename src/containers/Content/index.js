import React from 'react';
import {Typography, Box, makeStyles} from "@material-ui/core";

import Cards from "../Cards";

const useStyles = makeStyles((theme) => ({
  content: {
    overflow: 'scroll',
    padding: '30px 120px',
    flex: 1,
  },
  heading: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '34px',
    marginBottom: '7px',
    letterSpacing: '0.3px'
  },
  subHeading: {
    color: theme.palette.gray,
    maxWidth: 650,
    fontSize: 14,
    lineHeight: '23px',
    letterSpacing: '0.3px',
    marginBottom: 22
  },
  span: {
    padding: '3px 6px',
    backgroundColor: `${theme.palette.spanGray}1A`,
    borderRadius: 6
  }
}))

const Content = () =>{
  const classes = useStyles();
  return (
  <Box className={classes.content}>
    <Typography className={classes.heading}>Candy cotton candy sesame snaps biscuit</Typography>
    <Typography className={classes.subHeading}>
      Candy cotton candy sesame <Box component="span" className={classes.span}>#Design</Box> <Box component="span" className={classes.span}>#HR</Box> biscuit dessert topping halvah marshmallow gummies. Pie toffee dragée chocolate toffee biscuit. Icing chocolate cake ice cream jelly beans chocolate cake soufflé candy.
    </Typography>
    <Cards />
  </Box>
)};

export default Content;
