import React, { useEffect, useState } from "react";
import Slides from "../slides/Slides";
import style from "./feedback.module.css";

import avatarVira from "../../../public/images/avatarVira.png";
import avatarKonst from "../../../public/images/avatarKonst.png";
import avatarKolya from "../../../public/images/avatarKolya.png";

const arraySlides = [
  {
    id: 1,
    url: avatarKonst,
    comment:
      "Коврики супер!!! Качество на высшем уровне!!! Удачи и побольше заказов вам!!! Большое спасибо!",
    name: "Константин В.",
  },
  {
    id: 2,
    url: avatarVira,
    comment:
      "Покупала у ребят коврики для Хундай солярис в подарок молодому человеку. Все очень понравилось. Буду советовать только вас.",
    name: "Вера К.",
  },

  {
    id: 3,
    url: avatarKolya,
    comment:
      "Спасибо, все приехало, поставил. Результатом доволен, в машине супер! Заказывал на Ниссан.",
    name: "Николай П.",
  },
];

const Feedbacks = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % arraySlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id={style.slider}>
        {currentImage == 0 ? (
          <Slides
            url={arraySlides[2].url}
            comment={arraySlides[2].comment}
            name={arraySlides[2].name}
          />
        ) : (
          <Slides
            url={arraySlides[currentImage - 1].url}
            comment={arraySlides[currentImage - 1].comment}
            name={arraySlides[currentImage - 1].name}
          />
        )}

        <Slides
          url={arraySlides[currentImage].url}
          comment={arraySlides[currentImage].comment}
          name={arraySlides[currentImage].name}
        />

        {currentImage == 2 ? (
          <Slides
            url={arraySlides[0].url}
            comment={arraySlides[0].comment}
            name={arraySlides[0].name}
          />
        ) : (
          <Slides
            url={arraySlides[currentImage + 1].url}
            comment={arraySlides[currentImage + 1].comment}
            name={arraySlides[currentImage + 1].name}
          />
        )}
      </div>
    </>
  );
};

export default Feedbacks;
