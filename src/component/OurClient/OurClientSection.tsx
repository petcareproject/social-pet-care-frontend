import Slider from "./Slider";
import starss from "./assets/stars.png";

const OurClientSection = () => {
  return (
    <>
      <div className="svg-bg">
        <div className="container mx-auto md:px-6 px-4 w-full py-20">
          <h1 className="md:text-[48px] text-[35px] font-semibold md:pb-16 pb-10">
            What Our Client’s Say
          </h1>
          <div className="flex justify-between">
            <Slider />
          </div>
          <div className="md:flex block mx-auto w-full justify-center mt-10 font-semibold">
            <img src={starss} alt="star list" className="ml-[80px] md:ml-0" />
            <p className="text-[24px] leading-[1.75rem] text-center">
              Rated 4.5 Out of 5.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClientSection;
