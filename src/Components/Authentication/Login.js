import React from 'react'
import { useState } from "react";
import { Box, Button, TextField } from '@material-ui/core';
import { CryptoState } from '../../CryptoContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Login = ({ handleClose }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setAlert} = CryptoState();

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert(
        {
          open: true,
          message: 'Please fill all the Fields',
          type: 'error',
        }
      );
      return;
    }
    try {
      // here createUserWithEmailAndPassword is from fireBase
      const result = await signInWithEmailAndPassword(auth, email, password);

      console.log(result);

      setAlert({
        open: true,
        message: `Login Successful. welcome ${result.user.email}`,
        type: "success",
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }

  };

  return (
    <Box
      // p={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "30px"}}>

      <TextField
        variant='outlined'
        type='email'
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth>
      </TextField>
      <TextField
        variant='outlined'
        type='email'
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth>
      </TextField>

      <Button
        variant='contained'
        size='large'
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >Submit</Button>

    </Box>
  )
}

export default Login
