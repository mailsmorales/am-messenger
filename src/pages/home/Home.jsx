import PostCard from "../../components/Card/Card";
import { Container } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import CardCreate from "../../components/Card/CardCreate";

import "./home.css"

export default function Home() {
  return (
    <>
      <Sidebar />
        <Container sx={{maxWidth:'1200px', marginTop:'5%'}}>
          <CardCreate />
          <PostCard/>
        </Container>
    </>
  );
}
