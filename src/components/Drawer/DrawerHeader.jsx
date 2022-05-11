import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MessageIcon from "@mui/icons-material/Message";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from 'react-router-dom';

export default function DrawerHeader() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <Divider />
        <List className="list">
          <Link to="/">
            <ListItem button>
              <ListItemIcon className="listItemIcon">
                <HomeIcon /> <p>Home</p>
              </ListItemIcon>
            </ListItem>
          </Link>
          {/* поменять тут */}
          <Link to="/messages">
            <ListItem button>
              <ListItemIcon className="listItemIcon">
                <MessageIcon /> <p>Messages</p>
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/profile">
            <ListItem button>
              <ListItemIcon className="listItemIcon">
                <AccountBoxIcon /> <p>Profile</p>
              </ListItemIcon>
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon className="listItemIcon">
              <PeopleAltIcon /> <p>Friends</p>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className="listItemIcon">
              <PhotoLibraryIcon /> <p>Photos</p>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon className="listItemIcon">
              <AudiotrackIcon /> <p>Music</p>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon className="listItemIcon">
              <SearchIcon /> <p>Search for friends</p>
            </ListItemIcon>
          </ListItem>
        </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}