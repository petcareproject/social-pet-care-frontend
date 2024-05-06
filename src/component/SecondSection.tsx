import card1 from "../assets/owner.png";
import card2 from "../assets/meet.png";
import card3 from "../assets/start.png";
const SecondSection = () => {
  return (
    <div className="md:flex block justify-between w-full container md:px-6 px-4 mx-auto md:mt-28 mt-14">
      <div className="text-center lg:w-[33%] md:w-[28%] w-full mb-8 md:mb-0">
        <img src={card1} alt="first card image" className="mx-auto" />
        <h2 className="text-[24px] font-bold my-4">Find a Pet Owner</h2>
        <p className="text-[18px] lg:w-[80%] md:w-full mx-auto leading-6 text-[#444444] md:line-clamp-3 line-clamp-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>

      <div className="text-center lg:w-[33%] md:w-[28%] w-full mb-8 md:mb-0">
        <img src={card2} alt="first card image" className="mx-auto" />
        <h2 className="text-[24px] font-bold my-4">Meetup with pet’s</h2>
        <p className="text-[18px] lg:w-[80%] md:w-full mx-auto leading-6  text-[#444444] md:line-clamp-3 line-clamp-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>

      <div className="text-center lg:w-[33%] md:w-[28%] w-full mb-8 md:mb-0">
        <img src={card3} alt="first card image" className="mx-auto" />
        <h2 className="text-[24px] font-bold my-4">Start social gathering</h2>
        <p className="text-[18px] lg:w-[80%] md:w-full mx-auto leading-6 text-[#444444] md:line-clamp-3 line-clamp-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
