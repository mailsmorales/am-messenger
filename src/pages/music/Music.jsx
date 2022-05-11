import { Button } from "@material-ui/core";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import VideoMp4 from "../../assets/video/miyagi-tam-reveli.mp4";
import VideoWebm from "../../assets/video/miyagi-tam-reveli.webm";
import VideoMp4Bur from "../../assets/video/miyagi-burevestnik.mp4";
import VideoWebmBur from "../../assets/video/miyagi-burevestnik.webm";
import PosterMiyagi from "../../assets/posters/m12.jpg";
import PosterKosandra from "../../assets/posters/ma12.jpg";
import AudioMp3 from "../../assets/mp3-music/miyagi-tam-reveli.mp3";
import AudioMp3Kosandra from "../../assets/mp3-music/miyagi-kosandra.mp3";
import "./music.css";
import axios from "axios";
import { useState } from "react";
import React from "react";
import useVideos from "../../hooks/useVideos";
import SearchBar from "../../components/searchBar/SearchBar";

export default function Music() {
  const [videos, search, selectedVideo, setSelectedVideo] = useVideos();
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <>
      <Header />
      <Container sx={{ maxWidth: "1200px" }}>
        <div className="music">
          <div className="music__top">
            <div className="full-screen">
              <div className="full-screen__body">
                <h3 className="full-screen__title">Приятного прослушивания!</h3>
                {/* <SearchBar onFormSubmit={search} /> */}
              </div>
              <video
                autoPlay
                muted
                loop
                preload="auto"
                className="full-screen__video"
              >
                <source
                  type="video/webm"
                  src={VideoWebmBur}
                />
                <source
                  type="video/mp4"
                  src={VideoMp4Bur}
                />
              </video>
            </div>
          </div>
          <div className="music__items">
            <div className="items__container">
              <div className="items__body">
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterMiyagi} controls preload="metadata">
                      <source type="video/webm" src={VideoWebm} />
                      <source type="video/mp4" src={VideoMp4} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>YAMAKASI</p>
                    <span>2020</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item__video">
                    <video poster={PosterKosandra} controls preload="metadata">
                      <source type="video/webm" src={VideoWebmBur} />
                      <source type="video/mp4" src={VideoMp4Bur} />
                    </video>
                  </div>
                  <div className="item__video-text">
                    <h3>Miyagi and Andy Panda</h3>
                    <p>Буревестник</p>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mp3-music__top">
          <div className="full-screen-mp3">
            <div className="full-screen__body-mp3">
              <h3 className="full-screen__title-mp3">MP3 музыка</h3>
              <div className="search-input">
                {/* <TextField
                  sx={{ width: "100%", padding: " 0 50px", color: "white" }}
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Поиск музыки"
                  variant="filled"
                  size="small"
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mp3-music__items">
          <div className="items__container-mp3">
            <div className="items__body-mp3">
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>YAMAKASI</p>
                  <span>2020</span>
                </div>
              </div>
              <div className="item-mp3">
                <div className="item__mp3">
                  <audio controls preload="metadata">
                    <source type="audio/mp3" src={AudioMp3Kosandra} />
                  </audio>
                </div>
                <div className="item__mp3-text">
                  <h3>Miyagi and Andy Panda</h3>
                  <p>Kosandra</p>
                  <span>2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
