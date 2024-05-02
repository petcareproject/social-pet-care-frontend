import headphones from "./assets/hadphon.png";
import facebook from "./assets/Item → Link.png";
import twitter from "./assets/twitter.png";
import insta from "./assets/insta.png";
const WorkingSection = () => {
  return (
    <div className="xl:w-[100%] w-full bg-white md:p-6 p-4 ">
      <div>
        <h6 className="text-[24px] font-bold bottom-border">working hours</h6>

        <div className="flex justify-between pt-8 pb-4 border-dashed border-b-4 border-[#DEDEDE]">
          <h6 className="text-[16px] font-semibold">Monday-Saturday</h6>
          <h6 className="text-[16px] font-semibold text-[#FA441D]">
            08AM - 10PM
          </h6>
        </div>

        <div className="flex justify-between py-4 border-dashed border-b-4 border-[#DEDEDE]">
          <h6 className="text-[16px] font-semibold">Sunday</h6>
          <h6 className="text-[16px] font-semibold text-[#FA441D]">
            08AM - 10PM
          </h6>
        </div>

        <div className="flex py-6 border-dashed border-b-4 border-[#DEDEDE]">
          <img src={headphones} alt="headphones" />
          <div className="ml-4">
            <h6 className="text-[#FA441D] text-[26px] font-bold">
              +012 12383492
            </h6>
            <p className="text-[16px] font-semibold">
              Got Questions? Call us 24/7
            </p>
          </div>
        </div>

        <div className="flex mt-5">
          <img src={facebook} alt="facebook" className="mr-2" />
          <img src={twitter} alt="twitter" className="mr-2" />
          <img src={insta} alt="insta" className="mr-2" />
        </div>
      </div>
    </div>
  );
};

export default WorkingSection;
