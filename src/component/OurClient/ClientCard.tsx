import image_bg from "./assets/client.png.png";
import comma from "./assets/comma.png";
const ClientCard = ({ starimage, description, heading, text }: any) => {
  return (
    <>
      <div className="relative">
        <img src={image_bg} alt="image" className="lg:w-[95%] w-full" />
      </div>
      <div className="lg:w-[60%] w-[80%] lg:ml-[60px] ml-p xl:top-[70px] md:top-[10px] sm:top-[50px] top-[10px] text-center absolute left-[10%]">
        <div className="flex justify-center lg:mb-6 md:mb-2 sm:mb-6 mb-2">
          <img src={starimage} alt="star images" />
        </div>
        <p className="lg:text-[20px] md:text-[15px] sm:text-[22px] text-[15px] lg:leading-8 md:leading-6 sm:leading-8 leading-6 2xl:line-clamp-none line-clamp-2">
          {description}
        </p>
        <p className="lg:text-[26px] md:text-[20px] sm:text-[26px] text-[20px] leading-8 font-bold xl:mt-6 md:mt-2 sm:mt-6 mt-2">
          {heading}
        </p>
        <p className="lg:text-[16px] md:text-[14px] sm:text-[16px] text-[14px] md:leading-6 sm:leading-8 leading-6 ">
          {text}
        </p>
        <div className="flex justify-end lg:mt-5 mt-2">
          <img
            src={comma}
            alt="comma image"
            className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px] lg:w-[56px] lg:h-[56px] mr-6"
          />
        </div>
      </div>
    </>
  );
};

export default ClientCard;
