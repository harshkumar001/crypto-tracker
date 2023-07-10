import React from 'react'
import { useState } from "react";
import { Box, Button, TextField } from '@material-ui/core';

const Login = ({ handleClose }) => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

const handleSubmit = () => {};

  return (
    <Box
    p={3}
    style={{ display: "flex", flexDirection: "column", gap: "20px"}}>

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
          style={{ backgroundColor: "#EEBC1D"}}
          onClick={handleSubmit}
        >Submit</Button>

    </Box>
  )
}

export default Login
