import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./auth.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/config";
import { setDoc, doc, Timestamp } from "firebase/firestore";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  const { name, email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || password) {
      setData({ ...data, error: "все поля обязательны к заполнению" });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
      });
      setData({
        name: "",
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
      <h4>Регистрация</h4>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          label="Your name"
          name="name"
          value={name}
          onChange={handleChange}
          required
          variant="standard"
        />
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
           {loading ? 'Создание учетной записи...' : 'зарегистрироваться'}
        </Button>
      </form>
    </>
  );
};

export default Register;
