import Header from '../../components/Header/Header';
import { Container } from "@material-ui/core";
import "./messages.css";
import React, { useEffect, useState } from "react";
import { db, auth, storage } from "../../firebase/config";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  Timestamp,
  orderBy,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import User from "../../components/user/User";
import { onAuthStateChanged } from "firebase/auth";
import MessageForm from "../../components/messageForm/MessageForm";
import Header from '../../components/Header/Header';

function Messages() {
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (_user) => {
      if (!user) setUser(_user);
    });

    return () => {
      unsub();
    };
  }, []);

  useEffect(() => {
    if (user) {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("uid", "not-in", [user.uid]));

      const unsub = onSnapshot(q, (querySnapshot) => {
        let users = [];
        querySnapshot.forEach((doc) => {
          users.push(doc.data());
        });
        console.log(users);
        setUsers(users);
      });

      return () => unsub();
    }
  }, [auth, user]);

  const selectUser = (user) => {
    setChat(user);
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <>
      <Header/>
      <Container sx={{ maxWidth: "1200px" }}>
        <div className="home_container">
          <div className="users-container">
            {users.length &&
              users.map((user) => (
                <User key={user.uid} user={user} selectUser={selectUser} />
              ))}
          </div>
          <div className="messages_container">
            {chat ? (
              <>
                <div className="messages_user">
                  <h3>{chat.name}</h3>
                </div>
                <MessageForm
                  handleSubmit={handleSubmit}
                  text={text}
                  setText={setText}
                />
              </>
            ) : (
              <h3 className="no_conv">
                Выберите пользователя, чтобы начать разговор
              </h3>
            )}
          </div>
        </div>
      </Container>
    
    </>
  );
}

export default Messages;
