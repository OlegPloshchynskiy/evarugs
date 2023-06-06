import React from "react";
import previewImage from "../../../public/images/preview-banner.png";
import Button from "../button/Button";
import style from './preview.module.css'

const Preview = () => {
  return (
    <>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="text-container d-flex flex-column align-items-start g-2">
          <p className={style.title}>Innovative car <br /> mats</p>
          <p className={style.subtitle}>In your city</p>
          <Button />
        </div>
        <img src={previewImage} alt="" />
      </div>
    </>
  );
};

export default Preview;
