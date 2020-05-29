import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SignInPage from "./SigninPage";
import ProfilePage from "./ProfilePage";
import PrivatRoute from "./Private";
import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
    <Route path="/sign-in" component={SignInPage} />
    <PrivatRoute path="/profile" component={ProfilePage} />
  </BrowserRouter>,
  document.getElementById("root")
);
