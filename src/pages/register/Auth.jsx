import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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


const handleSubmit = async e => {
e.preventDefault();
if (!name || !email || password) {
  setData({...data, error: "Все поля обязательны"})
}
}

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
        {error ? <p className="error"> {error}</p>: null}
        <Button
          sx={{ marginTop: 1, width: 195, marginBottom: 1 }}
          className="accept"
          variant="contained"
          type="submit"
        >
          Подтвердить
        </Button>
      </form>
    </>
  );
};

export default Register;
