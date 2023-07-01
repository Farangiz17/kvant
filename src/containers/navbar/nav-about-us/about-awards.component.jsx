import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function AboutAwardsComponent() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        // slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
  return (
    <div className="container">
      <div className="awards__headers">
        <h4>Награды и признание</h4>
        <p>
          Мы уже 15 лет на рынке. Мы занимаемся торговлей генераторов, техники
          сельского хозяйства, а также промышленных электроинструментов,
          аккумуляторных, ручных и садовых инструментов, пневматических машин,
          водяных насосов, сварочного и строительного оборудования и
          аксессуаров. Мы являемся официальным ритейлером международных компаний
          таких как PERKINS, ANDELI, INGCO, CROWN, BOSCH. У нас очень большой
          ассортимент брендовых продуктов. Мы обслуживали и сейчас обслуживаем
          более 50 разных компаний и они нам доверяют свой комфорт. Доступность,
          качество и доверие - наш приоритет!
        </p>
      </div>
      <div className="awards__content mt-4">
        <Slider {...settings}>
            <div className="slick-item" ><Link to='/page/blank'><img src="https://belgradefoodshow.rs/wp-content/uploads/2020/11/andjeli%20logo%20jpg.jpg" alt="photo" /></Link></div>
            <div className="slick-item" ><img  src="https://belgradefoodshow.rs/wp-content/uploads/2020/11/andjeli%20logo%20jpg.jpg" alt="photo" /></div>
            <div className="slick-item" ><img  src="https://belgradefoodshow.rs/wp-content/uploads/2020/11/andjeli%20logo%20jpg.jpg" alt="photo" /></div>
            <div className="slick-item" ><img  src="https://belgradefoodshow.rs/wp-content/uploads/2020/11/andjeli%20logo%20jpg.jpg" alt="photo" /></div>
            <div className="slick-item" ><img  src="https://belgradefoodshow.rs/wp-content/uploads/2020/11/andjeli%20logo%20jpg.jpg" alt="photo" /></div>
        </Slider>
      </div>
    
    </div>
  );
}
