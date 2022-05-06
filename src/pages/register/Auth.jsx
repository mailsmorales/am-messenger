import React from 'react'
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

const Register = () => {
   
    
    
    return (
        <>
        <h4>Регистрация</h4>
        <TextField
         id="standard-basic"
         label="Your name"
         required
         variant="standard"
         />
        <TextField
         id="standard-basic"
         label="Email"
         required
         variant="standard"
         />
        <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        />
        <Button sx={{marginTop:1, width:195, marginBottom:1}}  className="accept" variant="contained">Подтвердить</Button>
        </>
    )
}

export default Register