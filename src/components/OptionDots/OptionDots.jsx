import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deleteDoc, doc } from 'firebase/firestore'
import { db, storage } from '../../firebase/config'
import { deleteObject, ref } from 'firebase/storage'

const options = [
    'Delete',
    'Edit'
];

const ITEM_HEIGHT = 48;

export default function OptionDots({ id, imageUrl }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    try{
      await deleteDoc(doc(db, "posts", id))
      console.log(err);
      const storageRef = ref(storage, imageUrl)
      await deleteObject(storageRef)
      
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
          <MenuItem onClick={handleDelete}>
            <p>Delete</p>
          </MenuItem>
            <MenuItem onClick={handleClose}>
            <p>Change</p>
          </MenuItem>
      </Menu>
    </div>
  );
}
