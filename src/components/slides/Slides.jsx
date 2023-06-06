import React from "react";
import style from "./slides.module.css";

const Slides = ({ name, comment, url }) => {
  return (
    <>
      <div className={style.slide}>
        <img src={url} alt="" className={style.avatar} />
        <p>{comment}</p>
        <div className={style.line}></div>
        <p>{name}</p>
      </div>
    </>
  );
};

export default Slides;
