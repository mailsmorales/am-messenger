import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MessageIcon from "@mui/icons-material/Message";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import TextField from '@mui/material/TextField';
import ListItemIcon from "@mui/material/ListItemIcon";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { auth, db } from "../../firebase/config";
import { signOut } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import Button from "@mui/material/Button";
import "./topbar.css";
import { async } from "@firebase/util";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      useNavigate;
    } catch {
      error;
    }
    // console.log(error);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSignOutFromOnline = async () => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid),{
      isOnline: false
    })
    await signOut(auth);
  };

  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <CssBaseline />
      <AppBar position="static" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ATABEK-MESSENGER
          </Typography>
          <div className="topbarCenter">
            <div className="searchbar">
            <TextField
              sx={{width:'70%', marginLeft:'170px', color:'white'}}
              hiddenLabel
              id="filled-hidden-label-small"
              placeholder="Найдите друзей"
              variant="filled"
              size="small"
            />
            </div>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
            </div>
            <div className="topbarIconItem">
              <Chat />
            </div>
            <div className="topbarIconItem">
              <Notifications />
            </div>
          </div>
          {/* <Link to="/register"> Войти </Link> */}
          {user?.email &&  auth.currentUser ? (
            <Button variant="#51a8ff" onClick={handleSignOutFromOnline}>
              Выйти
            </Button>
          ) : (
            <Button variant="#51a8ff">
              <Link to="/register"></Link>Войти
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {/* {user.displayName} */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="list">
          <Link to="/">
            <ListItem button>
              <ListItemIcon className="listItemIcon">
                <HomeIcon /> <p>Новости</p>
              </ListItemIcon>
            </ListItem>
          </Link>
          {/* поменять тут */}
          <Link to="/messages">
            <ListItem button>
              <ListItemIcon className="listItemIcon">
                <MessageIcon /> <p>Мессенджер</p>
              </ListItemIcon>
            </ListItem>
          </Link>
          <Link to="/profile" >
            <ListItem button>
              <ListItemIcon className="listItemIcon">
                <AccountBoxIcon /> <p>Профиль</p>
              </ListItemIcon>
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemIcon className="listItemIcon">
              <PeopleAltIcon /> <p>Друзья</p>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon className="listItemIcon">
              <PhotoLibraryIcon /> <p>Фотографии</p>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon className="listItemIcon">
              <AudiotrackIcon /> <p>Музыка</p>
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon className="listItemIcon">
              <SearchIcon /> <p>Найти друзей</p>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
