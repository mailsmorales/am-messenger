import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Button from "@mui/material/Button";
import MoodIcon from "@mui/icons-material/Mood";
import Avatar from "@mui/material/Avatar";
import Img from "../../assets/img/ali.jpg";
import CircularStatic from '../Progress/CircularStatic'
import { storage, db, auth } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { getDoc, doc, updateDoc, Timestamp, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CardCreate = () => {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();
  const [progress, setProgress] = useState(0)

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

  const [formData, setFormData] = useState({
    description:"",
    image:"",
    createdAt: Timestamp.now().toDate()
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleImageChange = (e) => {
    setFormData({...formData, image: e.target.file[0] })
  }

  const handlePublish = () => {
    if(!formData.description || formData.image) {
      console.log("you need to fill all fields")
    }

    const storageRef = ref(storage, `/postsImages/${Date.now()}${formData.image.name}`);

    const uploadImage = uploadBytesResumable(storageRef, formData.image)

    uploadImage.on("state_changed",
    (snapshot) => {
      const progressPercent = Math.round(
        (snapshot.bytesTrasferred /snapshot.totalBytes) * 100
      );
      setProgress(progressPercent)
    },
    (err)=>{
      console.log(err)
    },
    ()=>{
      setFormData({
        description:"",
        image:""
      });

      getDownloadURL(uploadImage.snapshot.ref)
      .then((url) => {
        const postRef = collection()
      })
    }
    )
  }

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
                name="description"
                id="standard-basic"
                variant="standard"
                value={formData.description}
                onChange={(e) =>handleChange(e)}
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
                onChange={(e) =>handleImageChange(e)} />
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
                onClick={handlePublish}
              >
                Опубликовать
              </Button>
            </div>
            <CircularStatic />
            </>
        )}
    </Box>
  )
}

export default CardCreate