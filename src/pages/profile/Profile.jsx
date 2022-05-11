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
import Delete from "../../components/svg/Delete";
import { storage, db, auth } from "../../firebase/config";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import {
  getDoc,
  doc,
  updateDoc,
  Timestamp,
  collection,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "../../components/Header/Header";

const Profile = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleDeleteProfileImage = async () => {};

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (_user) => {
      if (!user)
        getDoc(doc(db, "users", _user.uid)).then((docSnap) =>
          setUser(docSnap.data())
        );
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
          if (user.avatarPath) {
            await deleteObject(storage, user.avatarPath);
          }
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

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.file[0] });
  };

  const handlePublish = () => {
    if (!formData.description || formData.image) {
      console.log("you need to fill all fields");
    }

    const storageRef = ref(
      storage,
      `/postsImages/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTrasferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          description: "",
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const postRef = collection();
        });
      }
    );
  };

  return (
    <>
      <Header />
      <img className="profileCoverImg" src={Artwork} />
      <Container sx={{ maxWidth: "1200px" }}>
        <div className="profile">
          <div className="profileRight">
            {user && (
              <>
                <div className="profileRightTop">
                  <div className="profileCover">
                    {/* <img className="profileCoverImg" src={Artwork} /> */}
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
                            className="postBoxMidField"
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
                          <div className="postBoxBotRow">
                            <label>
                              <AddPhotoAlternateIcon className="addPhotoIcon" />
                              <input
                                className="profileInputFile"
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e)}
                              />
                              <p>Фото</p>
                            </label>
                            <div className="postBoxBotSmile">
                              <MoodIcon
                                sx={{ marginLeft: "10px" }}
                                className="addSmileIcon"
                              />
                              <p>Смайлики</p>
                            </div>
                          </div>
                          <Button
                            sx={{ height: "40px", marginRight: "6%" }}
                            variant="contained"
                            color="primary"
                            className="postBoxBotBtn"
                            onClick={handlePublish}
                          >
                            Опубликовать
                          </Button>
                        </div>
                      </Box>
                      <PostCard />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Profile;
