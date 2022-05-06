import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { UserAuth } from "../../context/AuthContext";
import {faker} from '@faker-js/faker'
import FloatingActionButtons from './UpdDel';

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

export default function RecipeReviewCard() {
  const [count, setCount] = useState(0)
  const { user } = UserAuth();

  const counter = () => {
    setCount(count +1)
  }


  return (
    <Card sx={{ maxWidth: 915, marginTop:'50px' }}>
      <CardHeader
        avatar={
          <Avatar src={faker.image.avatar()} aria-label="recipe" />
        }
        action={
          <FloatingActionButtons />
        }
        title={user.displayName}
        subheader="September 14, 2016"
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
        <Fab color="secondary" onClick={counter} aria-label="like">
          <FavoriteIcon />{ count}
        </Fab>
      </CardActions>
    </Card>
  );
}
