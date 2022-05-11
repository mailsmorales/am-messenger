import "./profile.css";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import MoodIcon from "@mui/icons-material/Mood";
import Avatar from "@mui/material/Avatar";
import PostCard from "../../components/Card/Card";
import SideBar from "../../components/sidebar/Sidebar";
import Img from "../../assets/img/ali.jpg";
import Artwork from "../../assets/img/artwork.jpg";
import Camera from "../../components/svg/Camera";
import { storage, db, auth } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Header from "../../components/Header/Header";

const Profile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();

  const handleDeleteProfileImage = async () => {

  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (_user) => {
      if (!user) getDoc(doc(db, "users", _user.uid)).then((docSnap) => setUser(docSnap.data())
    )
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          console.log(url);
          setImg("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImg();
    }
  }, [img]);
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profileRight">
          {user && (
            <>
              <div className="profileRightTop">
                <div className="profileCover">
                  <img className="profileCoverImg" src={Artwork} />
                  <div className="profile_container">
                    <div className="img_container">
                      <img src={user.avatar || Img} alt="avatar" />
                      <div className="overlay">
                        <div>
                          <label htmlFor="photo">
                            <Camera />
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            id="photo"
                            onChange={(e) => setImg(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profileInfo">
                  <h4 className="profileInfoName">{user.name}</h4>
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
                        src={user.avatar || Img}
                        sx={{ width: 50, height: 50 }}
                      />
                      <p>О чем вы думаете {user.name} ?</p>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
