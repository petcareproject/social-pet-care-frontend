import CommonData from "../CommonData";
import Button from "../ui/Button";
import dog from "./assets/dog-walker.png";
import list from "./assets/list.png.png";

const WelcomeSection = () => {
  return (
    <>
      <div className="md:flex sm:block xl:my-20 sm:my-10">
        <div className="xl:w-[55%] sm:w-full">
          <CommonData
            heading="Welcome to The Pet Care Company"
            description="Lorem ipsum dolor sit amet,consectetur adipiscing elit do ei usmod
          tempor incididunt ut labore et.Lorem ipsumsit amet, consectetur
          adipiscing elit, sed do eiusmod teincididunt ut la amet,consectetur."
          />
          <div>
            <div className="flex mb-4">
              <img src={list} alt="" className="w-[41px] h-[25px]" />
              <p className="xl:ml-2 md:ml-1 xl:text-[18px] text-[16px]">
                Graceful goldfish, to small, cute kittens
              </p>
            </div>

            <div className="flex mb-4">
              <img src={list} alt="" className="w-[41px] h-[25px]" />
              <p className="xl:ml-2 md:ml-1 xl:text-[18px] text-[16px]">
                Feeders are either veterinary qualified staf
              </p>
            </div>

            <div className="flex mb-4">
              <img src={list} alt="" className="w-[41px] h-[25px]" />
              <p className="xl:ml-2 md:ml-1 xl:text-[18px] text-[16px]">
                Experienced pet owners and animal lovers
              </p>
            </div>

            <div className="flex mb-4">
              <img src={list} alt="" className="w-[41px] h-[25px]" />
              <p className="xl:ml-2 md:ml-1 xl:text-[18px] text-[16px]">
                Hungry horses: whatever the size of your pe
              </p>
            </div>
          </div>
          <Button
            variant={{ theme: "dark", thickness: "thick" }}
            className="rounded-full mt-4 lg:ml-4"
          >
            About Us
          </Button>
        </div>
        <div className="xl:w-[45%] sm:w-full md:my-auto md:mt-0 my-10">
          <img src={dog} alt="Image" />
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
