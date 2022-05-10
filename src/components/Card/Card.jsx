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
import {faker} from '@faker-js/faker'
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

export default function PostCard() {
  const [likeCount, setLikeCount] = useState(0)
  const [DisLikeCount, setDisLikeCount] = useState(0)
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
        subheader="10 мая 2022"
      />
      <CardContent>
        <Typography sx={{fontSize:18, color:'#252525'}} variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardMedia
        sx={{padding:'0 20px'}}
        component="img"
        height="600"
        image={faker.image.animals()}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <CardButtons />
          {/* <ThumbUpIcon onClick={() => setLikeCount(likeCount +1)} />{likeCount}
          <ThumbDownIcon onClick={() => setDisLikeCount(DisLikeCount +1)} />{DisLikeCount} */}
      </CardActions>
    </Card>
    )}
    </>
  );
}
