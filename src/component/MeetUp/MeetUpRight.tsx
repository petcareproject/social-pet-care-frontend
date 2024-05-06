import CommonData from "../CommonData";
import paw from "../../assets/paw-title.svg fill.png";
import icon1 from "./assets/div.elementor-icon-box-icon.png";
import icon2 from "./assets/location.png";
import icon3 from "./assets/online.png";
import icon4 from "./assets/social.png";
import icon5 from "./assets/star.png";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const MeetUpRight = () => {
  const navigate = useNavigate();
  const redirectToAboutUs = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="lg:w-[50%] md:w-[52%] w-full my-auto before-img">
        <CommonData
          img1={paw}
          span="Trusted pet Meetup"
          heading="Search & Find Dog Owner In Your Area."
          description="We provide group and individual daily dogs walking that are tailored
                      to fit you and your dog’s needs. During the dog walking booking, your
                       sitter will walk and engage with your dog on a safe route."
        />

        <div className="flex justify-between lg:w-[70%] lg:ml-4 w-full">
          <ul>
            <li className="flex mb-2">
              <img src={icon1} alt="icon" className="w-[16px] h-[16px]" />
              <p className="ml-2 md:text-[15px]"> Professional Gathering</p>
            </li>
            <li className="flex  mb-4">
              <img src={icon2} alt="icon" className="w-[16px] h-[16px]" />
              <p className="ml-2 md:text-[15px]">Nearby Meet's up</p>
            </li>
            <li className="flex  mb-4">
              <img src={icon3} alt="icon" className="w-[16px] h-[16px]" />
              <p className="ml-2 md:text-[15px]">Online search</p>
            </li>
          </ul>
          <ul>
            <li className="flex  mb-4">
              <img src={icon4} alt="icon" className="w-[16px] h-[16px]" />
              <p className="ml-2 md:text-[15px]">
                social gathering <br />
                around you
              </p>
            </li>
            <li className="flex mb-4">
              <img src={icon5} alt="icon" className="w-[16px] h-[16px]" />
              <p className="ml-2 md:text-[15px]">20+ meeting completed</p>
            </li>
          </ul>
        </div>

        <Button
          variant={{ theme: "dark", thickness: "thick" }}
          className="rounded-full mt-4 lg:ml-4"
          onClick={redirectToAboutUs}
        >
          About Us
        </Button>

        {/* <CommonData btn="About Us" /> */}
      </div>
    </>
  );
};

export default MeetUpRight;
