import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => (
  <nav className="Nav">
    <Link className="Nav" to="/">
      Главная страница
    </Link>

    <Link className="Nav" to="/sign-in">
      Авторизация
    </Link>

    <Link className="Nav" to="/profile">
      Мой профиль
    </Link>

    <Button
      label="Удалить профиль"
      handleClick={() => {
        localStorage.clear();
        window.location.reload();
      }}
    />
  </nav>
);

const Layout = () => (
  <div>
    <Header />
  </div>
);

export default Layout;
