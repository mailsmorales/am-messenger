import "./profile.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import MoodIcon from "@mui/icons-material/Mood";
import Avatar from "@mui/material/Avatar";
import { UserAuth } from "../../context/AuthContext";
import PostCard from "../../components/Card/Card";
import SideBar from "../../components/sidebar/Sidebar";
import Img from '../../assets/img/ali.jpg'

const Profile = () => {
  const { user } = UserAuth();
  const [image, setImage] = useState(null);

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>
      <SideBar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={Img} />
              <Avatar
                alt="Remy Sharp"
                src={Img}
                sx={{
                  width: "150px",
                  height: 150,
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  margin: "auto",
                  top: 150,
                }}
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.displayName}</h4>
            </div>
          </div>
          <div className="profileRightBottomAll">
            <div className="profileRightBottom">
              <Box
                className="postBox"
                sx={{
                  width: 915,
                  height: 240,
                  backgroundColor: "primary.white",
                  borderRadius: "5px",
                }}
              >
                <div className="postBoxTop">
                  <Avatar
                    alt="Remy Sharp"
                    src={Img}
                    sx={{ width: 50, height: 50 }}
                  />
                  <p>О чем вы думаете {user.displayName}?</p>
                </div>
                <div className="postBoxMid">
                  <TextField
                    sx={{
                      marginLeft: "50px",
                      width: "90%",
                    }}
                    required
                    id="standard-basic"
                    variant="standard"
                  />
                </div>
                <div className="postBoxBot">
                  <label>
                    <AddPhotoAlternateIcon className="addPhotoIcon" />
                    <input className="profileInputFile" type="file" />
                    <p>Фото</p>
                  </label>
                  <div>
                    <MoodIcon
                      sx={{ marginLeft: "10px" }}
                      className="addSmileIcon"
                    />
                    <p>Смайлики</p>
                  </div>
                  <Button
                    sx={{ marginLeft: "64%", height: "40px" }}
                    variant="contained"
                    color="primary"
                  >
                    Опубликовать
                  </Button>
                </div>
              </Box>
              <PostCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
