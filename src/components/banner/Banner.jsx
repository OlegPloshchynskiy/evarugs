import React from "react";
import style from "./banner.module.css";
import phone from "../../../public/images/phone.png";
import location from "../../../public/images/location.png";
import instagram from "../../../public/images/instagram.png";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className="container d-flex justify-content-between align-items-center g-2">
        <div className={style.item}>
          <img src={phone} alt="" />
          <span>+375 29 292-29-29 (VEL) +375 33 333-33-33 (МТС)</span>
        </div>
        <div className={style.item}>
          <img src={location} alt="" />
          <span>Your city</span>
        </div>
        <div className={style.item}>
          <img src={instagram} alt="" />
          <span>
            Visit our page
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
