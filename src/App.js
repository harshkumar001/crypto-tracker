// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import Alert from './Components/alert'

function App() {
  // const useStyles = makeStyles(() => ({
  //   App: {
  //     backgroundColor: "#14161a",
  //     color: "white",
  //     minHeight: "100vh",
  //   },
  // }));
  // const classes = useStyles();

  return (
    <BrowserRouter>
      <div className="classes">
        <Header className="head"/>
        <Routes>
          <Route path="/" Component={HomePage} exact></Route>
          <Route path="/coins/:id" Component={CoinPage}></Route>
        </Routes> 
      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;
