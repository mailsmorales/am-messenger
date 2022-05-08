import "./profile.css";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';
import MoodIcon from '@mui/icons-material/Mood';
import Avatar from '@mui/material/Avatar';
import ShareIcon from '@mui/icons-material/Share';
import { UserAuth } from "../../context/AuthContext";
import faker from "@faker-js/faker";
import PostCard from "../../components/Card/Card";

const Profile = () => {
  const { user } = UserAuth();
  const [image, setImage] = useState(null)

  const handleChangeFile = (e) => {
     if(e.target.files[0]) {
      setImage(e.target.files[0])
     }
  }


  return (
    <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={faker.image.nature()} />
              <Avatar
              alt="Remy Sharp"
              src={faker.image.avatar()}
              sx={{
                width: '150px',
                height: 150,
                borderRadius:'50%', 
                objectFit:'cover',
                position:'absolute',
                left:0,
                right:0,
                margin:'auto',
                top:150,
              }}
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.displayName}</h4>
            </div>
          </div>
          <div className="profileRightBottomAll">
          <div className="profileRightBottom">
          <Box className="postBox"
            sx={{
              width: 915,
              height: 240,
              backgroundColor: 'primary.white',
              borderRadius:'5px',
            }}
          >
            <div className="postBoxTop">
            <Avatar
            alt="Remy Sharp"
            src={faker.image.avatar()}
            sx={{ width: 50, height: 50 }}
              />
            <p>What's in your mind {user.displayName}?</p>
            </div>
            <div className="postBoxMid">
            <TextField sx={{
             marginLeft:'50px',
             width: '90%',
            }}
            required
            id="standard-basic"
            variant="standard" />
            </div>
            <div className="postBoxBot">
              <div className="postBoxAddPhoto">
              <AddPhotoAlternateIcon className="addPhotoIcon" />
              <p>Add photo</p>
              </div>
              <div className="postBoxAddSmile">
              <MoodIcon className="addSmileIcon" />
              <p>Feelings</p>
              </div>
              <Button sx={{marginLeft:'500px'}} variant="contained" color="primary">
              Share
              </Button>
            </div>
          </Box>
          <PostCard />
          </div>
          <div className="profileRightBottomRight">
            <div className="profileShare">
              <label>
                <ShareIcon sx={{marginLeft:'40%'}} />
                <input className="profileInputFile" type="file" />
                <p>Добавьте свое фото!</p>
              </label>
              <Button sx={{marginLeft:'10px'}} color="primary" variant="contained">Подтвердить</Button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
