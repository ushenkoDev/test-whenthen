import React from 'react';
import {makeStyles, Box} from "@material-ui/core";

import FooterMenu from "../../components/FooterMenu";
import AddNew from "../../assets/icons/add-new";

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.palette.common.white,
    borderTop: `1px solid ${theme.palette.borderGray}`,
    height: '65px',
    alignItems: 'center',
    width: '100%',
    flexShrink: 0,
    padding: '0 19px 0 24px',
    boxSizing: 'border-box'
  }
}));

const Footer = () =>{
  const classes = useStyles();

  return (
  <Box display="flex" justifyContent="space-between" className={classes.footer}>
    <FooterMenu />
    <AddNew />
  </Box>
)};

export default Footer;
