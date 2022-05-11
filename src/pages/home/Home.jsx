import React, { useEffect, useState } from 'react';
import "./home.css"
import PostCard from "../../components/Card/Card";
import { Container } from "@mui/material";
import CardCreate from "../../components/Card/CardCreate";
import Header from '../../components/Header/Header'
import { CircularProgress } from "material-ui";
import { db } from '../../firebase/config';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("createdAt", "desc"))
    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        id:doc.id,
        ...doc.data()
      }));
      setPosts(posts)
      console.log(posts)
    })
  }, [])

  return (
    <>
      <Header />
        <Container sx={{maxWidth:'1200px', marginTop:'5%'}}>
          <CardCreate />
          {posts.lenght === 0 ? (
            <>
            <CircularProgress />
            <p>Загрузка</p>
            </>
          ) : (
            posts.map(({id, description, imageUrl, createdAt}) => <PostCard key={id} description={description} imageUrl={imageUrl} createdAt={createdAt} />)
          )}
        </Container>
    </>
  );
}
