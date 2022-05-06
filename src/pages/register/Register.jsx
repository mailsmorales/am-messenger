import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import LogoImg from "../../assets/icons/VK-logo.png";
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import Auth from './Auth'
import LoginEmail from "./LoginEmail";

import "./register.css";


const Register = () => {
  const { googleSignIn, user } = UserAuth();
  const [ haveAnAccount, setHaveAnAccount ] = useState(false)
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const alreadyReg = () => {
    setHaveAnAccount(current => !current)
  }

  useEffect(() => {
    if (user != null) {
      navigate('/profile')
    }
  }, [user])


  return (
    <div id="login-page">
    <div className="wrap2">
      <div className="wrap1">
        <div className="content">
          <div className="IndexPageContent">
            <div className="IndexPageContent__content">
              <div className="img__content">
                <img
                  src="https://www.tawk.to/wp-content/uploads/2020/08/answer-chat-in-mobile-c.png"
                  alt=""
                />
              </div>
            </div>
            <div
              className="index__column"
            >
              <div className="login__card" id="login-card">
                <div className="img__login">
                  <img src={LogoImg} alt="" />
                </div>
                <div className="loginWithEmail">
                <div className="change" onClick={alreadyReg}>{haveAnAccount === false ? (<h4>Уже есть аккаунт?</h4>) : (<h4>Еще нет аккаунта?</h4>)}</div>
                  {haveAnAccount === false ? (
                    <LoginEmail />
                  ) : (
                    <Auth />
                  )}
                </div>
                <div className="login-button google"
                onClick={handleGoogleSignIn}
                >
                  <Button sx={{marginTop:'30px'}} variant="contained">
                    <GoogleIcon
                      sx={{
                        marginRight: 2,
                      }}
                    />{" "}
                    Войти через Google
                  </Button>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;
