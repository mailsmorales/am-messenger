import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/topbar/Protected";
import Home from "./pages/home/Home";
import Messages from "./pages/message/Messages";
import Music from "./pages/music/Music";
import Photos from "./pages/photos/Photos";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route
          exact
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        ></Route>
        <Route
          exact
          path="/messages"
          element={
            <Protected>
              <Messages />
            </Protected>
          }
        ></Route>
        <Route
          exact
          path="/music"
          element={
            <Protected>
              <Music />
            </Protected>
          }
        ></Route>
        <Route
          exact
          path="/photos"
          element={
            <Protected>
              <Photos />
            </Protected>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
