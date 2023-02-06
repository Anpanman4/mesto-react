import React from "react";
import logo from "../images/logo.svg"

function Header({altText}) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt={altText} />
    </header>
  )
}

export default Header