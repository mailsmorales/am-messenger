import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { updateDoc, doc } from "firebase/firestore";
import { async } from "@firebase/util";

const LoginEmail = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const { email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || password) {
      setData({ ...data, error: "все поля обязательны к заполнению" });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      // firebase.firestore().collection("users").doc(id).set({});
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };

  return (
    <>
      <h4>Вход в вашу учетную запись</h4>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
        />
        {error ? <p className="error"> {error}</p> : null}
        <Button
          disabled={loading}
          sx={{ marginTop: 1, width: 195, marginBottom: 1 }}
          className="accept"
          variant="contained"
          type="submit"
        >
          {loading ? "вход в систему..." : "авторизоваться"}
        </Button>
      </form>
    </>
  );
};

export default LoginEmail;
