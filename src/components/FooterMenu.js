import React from 'react';
import {makeStyles, Typography, Box} from "@material-ui/core";

import Search from "../assets/icons/search";
import Bricks from "../assets/icons/bricks";
import Bell from "../assets/icons/bell";

const useStyles = makeStyles((theme) => ({
  search: {
    marginRight: 34,
  },
  bricks: {
    marginRight: 36
  },
  bell: {
    marginRight: 2
  },
  bellText: {
    color: theme.palette.blue,
    fontWeight: 500,
    fontSize: 14
  }
}));

const FooterMenu = () => {
  const classes = useStyles();

  return (
  <Box className={classes.footerMenu} display="flex" alignItems="center">
    <Search className={classes.search}/>
    <Bricks className={classes.bricks} />
    <Box display="flex" alignItems="center">
      <Bell className={classes.bell} />
      <Typography className={classes.bellText}>1</Typography>
    </Box>
  </Box>
)};

export default FooterMenu;
