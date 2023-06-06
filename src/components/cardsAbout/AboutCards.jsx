import React from "react";

import material from "../../../public/images/material.jpg";
import colors from "../../../public/images/colors.jpg";
import differences from "../../../public/images/differences.jpg";

import style from "./cards.module.css";

const arrayCards = [
  {
    id: 1,
    src: material,
    name: "MATERIAL",
    description:
      "EVA floor mats are all-weather and feature a unique diamond-shaped mesh surface. Because of what, water does not spill when removing the carpet and does not splash when driving. Carpets are waterproof.",
  },

  {
    id: 2,
    src: differences,
    name: "DIFFERENCES",
    description:
      "Rubber mats bend and climb on the pedals. EVA mats will not allow this! Special Velcro keeps it in one position. If desired, a embossed aluminum glide is installed for the driver.",
  },

  {
    id: 3,
    src: colors,
    name: "COLORS",
    description:
      "EVA car mats can be ordered in individual sizes and in different colors, which can be combined at the buyer's choice with the same colors of the edging polypropylene belt tape.",
  },
];

const AboutCards = () => {
  return arrayCards.map(({ src, name, description, id }) => {
    return (
      <div className={style.card} key={id}>
        <img src={src} alt="" className={style.cardImage} />
        <div className={style.title}>{name}</div>
        <div className={style.description}>{description}</div>
      </div>
    );
  });
};

export default AboutCards;
