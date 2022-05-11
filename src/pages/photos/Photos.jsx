import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Button } from "@material-ui/core";
import "./Photos.css";
import { storage } from "../../firebase/config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import Header from "../../components/Header/Header";
// import { v4 } from "uuid";

const Photo = () => {
  const [photo, setPhoto] = useState(null);
  const [photoList, setPhotoList] = useState([]);

  const photoListRef = ref(storage, "photos/");

  const uploadPhoto = () => {
    if (photo == null) return;
    const photoRef = ref(storage, `photos/${photo.name}`);
    uploadBytes(photoRef, photo).then(() => {
      alert("Фото загружается...");
    });
  };

  useEffect(() => {
    listAll(photoListRef).then((response) => {
      response.items.map((item) => {
        getDownloadURL(item).then((url) => {
          setPhotoList((photo) => [...photo, url]);
        });
      });
    });
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ maxWidth: "1200px" }}>
        <div className="photos">
          <div className="photos-top">
            <h3>Галерея</h3>
            <input
              type="file"
              onChange={(event) => {
                setPhoto(event.target.files[0]);
              }}
            />
            <Button onClick={uploadPhoto} variant="outlined">
              Добавить фото
            </Button>
          </div>
          <div className="photo-gallery">
            {photoList.map((url) => {
              return (
                <div key={url} className="photo-gallery__item">
                  <img src={url} />
                  {/* <Button className="photo-gallery__btn" variant="outlined">Удалить фото</Button> */}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Photo;
