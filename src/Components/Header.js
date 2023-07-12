import "./Header.css";
import {
  AppBar,
  Container,
  Select,
  Toolbar,
  Typography,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import React from "react";
import { light } from "@material-ui/core/styles/createPalette";
import { grey } from "@material-ui/core/colors";
import { CryptoState } from "../CryptoContext";
import AuthModel from "./Authentication/AuthModel";
import UserSidebar from "./Authentication/UserSidebar";

const Header = () => {
  const navigate = useNavigate();

  const {currency, setCurrency, user} = CryptoState();
  

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className="cryptoHead"
              variant="h6"
            >
              Coin TrackX
            </Typography>
            <Select
              variant="outlined"
              style={{
                // color: black,
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange = {(e) => {setCurrency(e.target.value)}}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            {user ? <UserSidebar/> : <AuthModel/>}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
