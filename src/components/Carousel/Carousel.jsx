import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from './CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation';
import "swiper/css";
import styles from "./Carousel.module.css";
import 'swiper/css/navigation';

const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[data])
}
const Carousel = ({data,component}) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[ Navigation ]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map(item => {
            return (
              <SwiperSlide>{component(item)}</SwiperSlide>
            )
        })}
      </Swiper>

    </div>
  );
};

export default Carousel;

