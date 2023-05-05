import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";



const SliderButtons = ()=>{
    const swiper = useSwiper();

    return (
        <div className=" flexCenter r__buttons">
         <button onClick={()=>swiper.slidePrev()}>&lt;</button>
         <button  onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}

const Residencies = () => {
  return (
    <section className="r__wrapper">
      <div className="paddings innerWidth r__container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            750: {
              slidesPerView: 3,
            },
            1100: {
              slidesPerView: 4,
            },
          }}
        >
            <SliderButtons/>
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className=" flexColStart r__card">
                <img src={card.image} alt="home" />
                <span className="secondaryText r__price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText"> {card.name}</span>
                <span className="secondaryText"> {card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

