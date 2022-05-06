import React from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { TextFieldsRounded } from '@mui/icons-material';

const LoginEmail = () => {


  
    return (
        <>
        <h4>Авторизация</h4>
        <TextFieldsRounded
         id="standard-basic"
         label="Email"
         required
         variant="standard"
         />
        <TextField
        required
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        />
        <Button sx={{marginTop:1, width:200, marginBottom:1}} onClick={signIn} className="accept" variant="contained">Подтвердить</Button>
        </>
    )
}

export default LoginEmail