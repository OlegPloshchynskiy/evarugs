import React from "react";
import style from "./about.module.css";
import AboutCards from "../cardsAbout/AboutCards";

const About = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className={style.title}>
          <p>
            What about <span className={style.gradient}>EVA</span> mats?
          </p>
        </div>
        <div className={style.cards}>
          <AboutCards />
        </div>
      </div>
    </>
  );
};

export default About;
