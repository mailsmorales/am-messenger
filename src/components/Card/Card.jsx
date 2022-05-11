import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OptionDots from '../OptionDots/OptionDots';
import CardButtons from '../Card/CardButtons'
import Img from "../../assets/img/ali.jpg";
import { storage, db, auth } from "../../firebase/config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({ description, imageUrl, createdAt }) {
  const [user, setUser] = useState();
  const [img, setImg] = useState("");

  const counter = () => {
    setLikeCount(count +1)
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
    {user && (
      <Card sx={{ maxWidth: 915, marginTop:'50px' }}>
      <CardHeader
        avatar={
          <Avatar src={user.avatar || Img} aria-label="recipe" />
        }
        action={
          <OptionDots />
        }
        title={user.name}
        subheader="at least 1 minute ago"
        // {createdAt.toDate().toDateString()}
      />
      <CardContent>
        <Typography sx={{fontSize:18, color:'#252525'}} variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{padding:'0 20px'}}
        component="img"
        height="600"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <CardButtons />
      </CardActions>
    </Card>
    )}
    </>
  );
}
