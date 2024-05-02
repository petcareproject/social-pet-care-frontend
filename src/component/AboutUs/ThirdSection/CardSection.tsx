import circle1 from "../assets/Circle1.png";
import circle2 from "../assets/Circle2.png";
import circle3 from "../assets/Circle3.png";

const CardSection = () => {
  return (
    <>
      <div className="md:flex sm:block bg-white justify-between w-full">
        <div className="items-center xl:w-[30%] md:w-[33%] w-[80%] mx-auto 2xl:px-24 xl:px-16 lg:px-10 md:px-4 flex flex-col pt-4 pb-8">
          <img src={circle1} alt="Circle 1" className="md:w-[80%] " />
          <h6 className="xl:text-[22px] md:text-[20px] text-[24px] font-bold">
            Register account
          </h6>
          <p className="text-center xl:text-[18px] md:text-[16px] text-[18px]  text-[#444444] mt-5">
            Lorem ipsum dolor sit amet ur adipiscing elit, sed do eiu incididunt
            ut labore et.
          </p>
        </div>
        <div className="border-r-2 border-[#faf6f6]"></div>

        <div className="items-center xl:w-[30%] md:w-[33%] w-[80%] mx-auto  2xl:px-24 xl:px-16 lg:px-10 md:px-4  flex flex-col pt-4 pb-8">
          <img src={circle2} alt="Circle 2" className="md:w-[80%] " />
          <h6 className="xl:text-[22px] md:text-[20px] text-[24px] font-bold">
            Add pet profile
          </h6>
          <p className="text-center xl:text-[18px] md:text-[16px] text-[18px]  text-[#444444] mt-5">
            Lorem ipsum dolor sit amet ur adipiscing elit, sed do eiu incididunt
            ut labore et.
          </p>
        </div>

        <div className="border-r-2 border-[#faf6f6]"></div>

        <div className="items-center xl:w-[30%] md:w-[33%] w-[80%] mx-auto  2xl:px-24 xl:px-16 lg:px-10 md:px-4 flex flex-col pt-4 pb-8">
          <img src={circle3} alt="Circle 3" className="md:w-[78%] " />
          <h6 className="xl:text-[22px] md:text-[20px]  font-bold">
            Search Nearby
          </h6>
          <p className="text-center xl:text-[18px] md:text-[16px] text-[18px]  text-[#444444] mt-5">
            Lorem ipsum dolor sit amet ur adipiscing elit, sed do eiu incididunt
            ut labore et.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardSection;
