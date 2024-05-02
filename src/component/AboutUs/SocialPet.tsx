import paw from "./assets/paw.png";
import pet1 from "./assets/pet1.png";
import pet2 from "./assets/pet2.png";
import pet3 from "./assets/pet3.png";
import pet4 from "./assets/pet4.png";
import pet5 from "./assets/pet5.png";
import pet6 from "./assets/pet6.png";
import pet7 from "./assets/pet7.png";

const SocialPet = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full items-center pt-16 pb-8">
        <img src={paw} alt="Paw image" className="w-[67px] h-[49px]" />
        <h6 className="uppercase text-[18px] text-[#FA441D] my-3">
          Registered Your Pets with Us
        </h6>
        <h1 className="font-semibold text-[43px]">How this works</h1>
      </div>

      <div className="flex justify-between 2xl:w-[85%] lg:w-[100%] w-full mx-auto">
        <div className="xl:mb-10 sm:mb-0">
          <img
            src={pet1}
            alt="social pet"
            className="xl:mb-8 lg:w-[90%] mx-auto w-[95%] md:mb-4 mb-2"
          />
          <img
            src={pet4}
            alt="social pet"
            className="xl:mb-8 lg:w-[90%] mx-auto w-[95%] md:mb-4 mb-2"
          />
        </div>

        <div>
          <img
            src={pet2}
            alt="social pet"
            className="xl:mb-8 lg:w-[90%] mx-auto w-[95%] md:mb-4 mb-2"
          />
          <img
            src={pet6}
            alt="social pet"
            className="xl:mb-8 lg:w-[90%] mx-auto w-[95%] md:mb-4 mb-2"
          />
          <img
            src={pet7}
            alt="social pet"
            className="xl:mb-8 lg:w-[90%] mx-auto w-[95%] md:mb-4 mb-2"
          />
        </div>

        <div>
          <img
            src={pet3}
            alt="social pet"
            className="xl:xl:mb-8 lg:w-[90%] mx-auto w-[95%] md:mb-4 mb-2"
          />
          <img
            src={pet5}
            alt="social pet"
            className="xl:mb-8 lg:w-[90%] mx-auto w-[95%] md:mb-4 mb-2"
          />
        </div>
      </div>
    </>
  );
};

export default SocialPet;
