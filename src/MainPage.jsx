import React from "react";
import Nav from "./Header";

const MainPage = () => (
  <div>
    <Nav />
    <div className="container">
      <hr />
      <ul>
        <h3>Как это работает</h3>
        <li>
          <h4>Зарегистрируйся</h4>
        </li>
        <li>
          <h4>Проверь данные аккаунта</h4>
        </li>
        <li>
          <h4>Удали свои данные</h4>
        </li>
      </ul>
    </div>
  </div>
);

export default MainPage;
