import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import ClientCard from "./ClientCard";
import stars from "./assets/stars.png";

const Slider = () => {
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
      <div className="container swiper-conatiner mt-3 mb-1">
        <Swiper
          freeMode={true}
          spaceBetween={15}
          grabCursor={true}
          loop={true}
          direction={"horizontal"}
          observeParents={true}
          slidesPerView={1}
          centeredSlides={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
              slidesPerGroup: 2,
            },
            1024: {
              pagination: {
                enabled: true,
                hiddenClass: "ubihb",
              },
              slidesPerView: 2,
              spaceBetween: 15,
              slidesPerGroup: 3,
            },
            1400: {
              slidesPerView: 2,
              spaceBetween: 15,
              slidesPerGroup: 2,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ClientCard
              starimage={stars}
              description="Excepteur sint occaecat cupidatat nilesm aniu
          deserunt mollit anim Lorem set dolo liem amet
          dolor sit amet, consectetur adipiscing il erunti
          nuliems elit sed incididunt"
              heading="Qlark Domous"
              text="Health Advisor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard
              starimage={stars}
              description="Excepteur sint occaecat cupidatat nilesm aniu
          deserunt mollit anim Lorem set dolo liem amet
          dolor sit amet, consectetur adipiscing il erunti
          nuliems elit sed incididunt"
              heading="Qlark Domous"
              text="Health Advisor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard
              starimage={stars}
              description="Excepteur sint occaecat cupidatat nilesm aniu
          deserunt mollit anim Lorem set dolo liem amet
          dolor sit amet, consectetur adipiscing il erunti
          nuliems elit sed incididunt"
              heading="Qlark Domous"
              text="Health Advisor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard
              starimage={stars}
              description="Excepteur sint occaecat cupidatat nilesm aniu
          deserunt mollit anim Lorem set dolo liem amet
          dolor sit amet, consectetur adipiscing il erunti
          nuliems elit sed incididunt"
              heading="Qlark Domous"
              text="Health Advisor"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ClientCard
              starimage={stars}
              description="Excepteur sint occaecat cupidatat nilesm aniu
          deserunt mollit anim Lorem set dolo liem amet
          dolor sit amet, consectetur adipiscing il erunti
          nuliems elit sed incididunt"
              heading="Qlark Domous"
              text="Health Advisor"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ClientCard
              starimage={stars}
              description="Excepteur sint occaecat cupidatat nilesm aniu
          deserunt mollit anim Lorem set dolo liem amet
          dolor sit amet, consectetur adipiscing il erunti
          nuliems elit sed incididunt"
              heading="Qlark Domous"
              text="Health Advisor"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientCard
              starimage={stars}
              description="Excepteur sint occaecat cupidatat nilesm aniu
          deserunt mollit anim Lorem set dolo liem amet
          dolor sit amet, consectetur adipiscing il erunti
          nuliems elit sed incididunt"
              heading="Qlark Domous"
              text="Health Advisor"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ClientCard
              starimage={stars}
              description="Excepteur sint occaecat cupidatat nilesm aniu
          deserunt mollit anim Lorem set dolo liem amet
          dolor sit amet, consectetur adipiscing il erunti
          nuliems elit sed incididunt"
              heading="Qlark Domous"
              text="Health Advisor"
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </>
  );
};

export default Slider;
