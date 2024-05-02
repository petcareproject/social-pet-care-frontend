import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const FriendSection = () => {
  return (
    <>
      <div className="bg-[#004870] text-white md:mt-20 mt-10">
        <div className="container mx-auto md:px-6 px-4 mt-20 md:pt-16 pt-10 md:flex block justify-between w-full">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </>
  );
};

export default FriendSection;
