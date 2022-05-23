import React from "react";
import logo from "../../src/images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип сайта" className="header__logo" />
    </header>
  );
}

export default Header;
