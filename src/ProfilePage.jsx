import React from "react";
import Nav from "./Header";

const ProfilePage = () => (
  <div>
    <Nav />
    <div className="container">
      <div>
        <h1>Данные пользователя:</h1>
      </div>
      <div>
        <h4>Login: {localStorage.getItem("login")}</h4>
      </div>
      <div>
        <h4> Password: {localStorage.getItem("password")}</h4>
      </div>
    </div>
  </div>
);

export default ProfilePage;
