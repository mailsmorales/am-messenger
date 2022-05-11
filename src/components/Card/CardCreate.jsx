import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import MoodIcon from "@mui/icons-material/Mood";
import Avatar from "@mui/material/Avatar";
import Img from "../../assets/img/ali.jpg";
import { storage, db, auth } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CardCreate = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();

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
    <Box className="postBox" sx={{ width: '100%', height: '30%', backgroundColor: "primary.white", borderRadius: "5px",}}>
        {user && (
            <>
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
                </div>
              <Button
                sx={{ height: "40px", marginRight:'6%' }}
                variant="contained"
                color="primary"
                className="postBoxBotBtn"
              >
                Опубликовать
              </Button>
            </div>
            </>
        )}
    </Box>
  )
}

export default CardCreate