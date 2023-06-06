import React from "react";
import logo from "../../../public/images/logo.png";
import style from "./header.module.css";

const Header = () => {
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between align-items-center">
        <img src={logo} alt="" />

        <nav className={style.menu}>
          <a href="#" className={style.menuItem}>
            Feedbacks
          </a>
          <a href="#" className={style.menuItem}>
            About
          </a>
          <a href="#" className={style.menuItem}>
            Contacts
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
 