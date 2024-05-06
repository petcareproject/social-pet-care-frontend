import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import slider from "./assets/Component 1.png";

const HeroRightSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log(width, "width");
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container swiper-conatiner mt-3 mb-1 md:w-[50%] w-full mx-auto">
        <Swiper
          freeMode={true}
          spaceBetween={10}
          grabCursor={true}
          loop={true}
          direction={"horizontal"}
          observeParents={true}
          slidesPerView={1}
          centeredSlides={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
            1024: {
              pagination: {
                enabled: true,
                hiddenClass: "ubihb",
              },
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
            1400: {
              slidesPerView: 1,
              spaceBetween: 0,
              slidesPerGroup: 1,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          scrollbar={{
            hide: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="mx-auto w-full lg:pl-[50px] md:pl-[20px]">
              <img src={slider} alt="slider image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto w-full lg:pl-[50px] md:pl-[20px]">
              <img src={slider} alt="slider image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="mx-auto w-full lg:pl-[50px] md:pl-[20px]">
              <img src={slider} alt="slider image" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </>
  );
};

export default HeroRightSection;
