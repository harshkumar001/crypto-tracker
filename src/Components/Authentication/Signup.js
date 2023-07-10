import React from "react";
import { useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { CryptoState } from "../../CryptoContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = ({handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const {setAlert} = CryptoState();


  const handleSubmit = async () => {
    if(password !== confirmPassword){
        setAlert(
            {
              open: true,
              message: 'Password do not match',
              type: 'error' ,
            }
            );
            return;
    }
    try {
        // here createUserWithEmailAndPassword is from fireBase
        const result = await createUserWithEmailAndPassword(auth, email, password);

        console.log(result);

        setAlert({
            open: true,
            message: `Sign Up Successful. welcome ${result.user.email}`,
            type: "success",
        });
        handleClose();
    } catch(error) {}
  };

  return (
    <Box
      style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "3px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      ></TextField>
      <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      ></TextField>
      <TextField
        variant="outlined"
        type="Confirm Password"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      ></TextField>
      <Button
          variant='contained'
          size='large'
          style={{ backgroundColor: "#EEBC1D"}}
          onClick={handleSubmit}
        >Submit</Button>
    </Box>
  );
};

export default Signup;
