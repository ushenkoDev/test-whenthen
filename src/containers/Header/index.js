import React from 'react';
import {makeStyles, Box} from "@material-ui/core";

import RightPanel from "../../components/RightPanel";
import ArrowBack from "../../assets/icons/arrow-back";

const useStyles = makeStyles(() => ({
  header: {
    flexShrink: 0,
    padding: '16px 32px 16px 24px'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="space-between" className={classes.header}>
      <ArrowBack />
      <RightPanel />
    </Box>
  )
};

export default Header;
