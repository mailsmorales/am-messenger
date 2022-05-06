import "./profile.css";
import React from "react";
// import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Button from '@mui/material/Button';
import MoodIcon from '@mui/icons-material/Mood';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { UserAuth } from "../../context/AuthContext";
import faker from "@faker-js/faker";

const Profile = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
      {/* <Topbar /> */}
      {/* <Sidebar /> */}
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={faker.image.nature()} />
              <img className="profileUserImg" src={faker.image.avatar()} />
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
            <img className="avatar" src={faker.image.avatar()} alt="" />
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
              <Button sx={{marginLeft:'500px'}} variant="contained" color="success">
              Share
              </Button>
            </div>
          </Box>
          <Box className="profilePost"
            sx={{
              width: 915,
              height: 770,
              backgroundColor: 'primary.white',
              borderRadius:'5px',
            }}>
              <div className="profilePostTop">
                <div className="profilePostTopInfo">
                  <img src={faker.image.avatar()} alt="" />
                  <h4>{user.displayName}</h4>
                  <MoreVertIcon sx={{marginLeft:'680px', cursor:'pointer'}} />
                </div>
                <div className="profilePostTopDesc">
                <p>Description DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</p>
                </div>
              </div>
              <div className="profilePostMid">
                <img src={faker.image.animals()} alt="" />
              </div>
              <div className="profilePostBot">
                <div className="profilePostBotLikes">
                  <FavoriteBorderIcon />
                  <p>0 people like it</p>
                </div>
                <h4>comments</h4>
              </div>
          </Box>
          </div>
          <div className="profileRightBottomRight">
            <button><input type="file" /></button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
