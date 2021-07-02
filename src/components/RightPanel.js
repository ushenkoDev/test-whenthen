import React, {useContext, useState} from 'react';
import {makeStyles, Box, Avatar, Menu, MenuItem} from "@material-ui/core";

import images from "../utils/images";
import Filter from "../assets/icons/filter";
import AddUser from "../assets/icons/add-user";
import Upload from "../assets/icons/upload";
import Options from "../assets/icons/options";
import {AppContext} from "../App";

const useStyles = makeStyles(() => ({
  avatar: {
    width: 24,
    height: 24,
    marginRight: 8,
    '&:last-child': {
      marginRight: 12
    }
  },
  filter: {
    marginRight: 24,
    cursor: 'pointer'
  },
  addUser: {
    marginRight: 38
  },
  upload: {
    marginRight: 36
  }
}))

const RightPanel = () =>{
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [opened, setOpened] = useState(false);
  const {categories, filter, setFilter} = useContext(AppContext);

  const handleFilter = (e) => {
    setAnchorEl(e.currentTarget);
    setOpened(!opened);
  };

  const handleClose = () => {
    setOpened(!opened)
  }

  const handleSelectFilter = (filter) => {
    setFilter(filter);
    setOpened(!opened);
  };

  return (
    <Box display="flex" alignItems="center">
      <Filter className={classes.filter} onClick={handleFilter}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={opened}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleSelectFilter("none")}
          className={filter === "None" ? "active-item" : ""}
        >
          none
        </MenuItem>
        {
          categories.map((item) => {
            return (
              <MenuItem
                key={item}
                onClick={() => handleSelectFilter(item)}
                className={filter === item ? "active-item" : ""}
              >
                {item}
              </MenuItem>
            )
          })
        }
      </Menu>
      <Box display="flex">
        <Avatar alt="Some user 1" src={images.user} className={classes.avatar}/>
        <Avatar alt="Some user 2" src={images.user} className={classes.avatar}/>
        <Avatar alt="Some user 3" src={images.user} className={classes.avatar}/>
      </Box>
      <AddUser className={classes.addUser}/>
      <Upload className={classes.upload}/>
      <Options />
    </Box>
  )
};

export default RightPanel;
