import React from "react";
import style from "./footer.module.css";
import instagram from "../../../public/images/instagram-footer.png";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.items}>
          <div className={style.title}>WE ARE ON SOCIAL NETWORKS</div>
          <img src={instagram} alt="" />
        </div>
        <div className={style.items}>
          <div className={style.title}>CONTACT PHONE NUMBERS</div>
          <div className={style.content}>
            +375 29 292-29-29 (VEL) <br /> +375 33 333-33-33 (МТС)
          </div>
        </div>
        <div className={style.items}>
          <div className={style.title}>ABOUT US</div>
          <div className={style.content}>
            Individual production of EVA <br /> floor mats for your car Your city
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
