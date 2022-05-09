import { Button } from "@material-ui/core";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Sidebar from "../../components/sidebar/Sidebar";
import "./music.css";

export default function Music() {
  return (
    <>
      <Sidebar />
      <Container sx={{ maxWidth: "1200px" }}>
        <div className="music">
          <div className="music__top">
            <div className="full-screen">
              <div className="full-screen__body">
                <h3 className="full-screen__title">Моя музыка</h3>
                <TextField
                  sx={{ width: "70%", padding: " 0 50px", color: "white" }}
                  hiddenLabel
                  id="filled-hidden-label-small"
                  placeholder="Поиск музыки"
                  variant="filled"
                  size="small"
                />
                <div className="full-screen__button">
                  <Button variant="outlined">Добавить</Button>
                </div>
              </div>
              <video
                autoplay
                muted
                loop
                preload="auto"
                className="full-screen__video"
              >
                <source
                  type="video/webm"
                  src="@/assets/video/miyagi-burevestnik.webm"
                />
                <source
                  type="video/mp4"
                  src="@/assets/video/miyagi-burevestnik.mp4"
                />
              </video>
            </div>
          </div>
          <div className="music__items">
            <div className="items__container">
              <div className="items__body">
                <div className="item">
                  <div className="item__video">
                    <video
                      poster="@/assets/posters/ma12.jpg"
                      controls
                      preload="metadata"
                    >
                      <source
                        type="video/webm"
                        src="@/assets/video/miyagi-tam-reveli.webm"
                      />
                      <source
                        type="video/mp4"
                        src="@/assets/video/miyagi-tam-reveli.mp4"
                      />
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
                    <video
                      poster="@/assets/posters/m12.jpg"
                      controls
                      preload="metadata"
                    >
                      <source
                        type="video/webm"
                        src="@/assets/video/miyagi-burevestnik.webm"
                      />
                      <source
                        type="video/mp4"
                        src="@/assets/video/miyagi-burevestnik.mp4"
                      />
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
                    <video
                      poster="@/assets/posters/ma12.jpg"
                      controls
                      preload="metadata"
                    >
                      <source
                        type="video/webm"
                        src="@/assets/video/miyagi-tam-reveli.webm"
                      />
                      <source
                        type="video/mp4"
                        src="@/assets/video/miyagi-tam-reveli.mp4"
                      />
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
                    <video
                      poster="@/assets/posters/m12.jpg"
                      controls
                      preload="metadata"
                    >
                      <source
                        type="video/webm"
                        src="@/assets/video/miyagi-burevestnik.webm"
                      />
                      <source
                        type="video/mp4"
                        src="@/assets/video/miyagi-burevestnik.mp4"
                      />
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
      </Container>
    </>
  );
}
