import MeetUpLeft from "./MeetUpLeft";
import MeetUpRight from "./MeetUpRight";

const MeetUpSection = () => {
  return (
    <div className="container mx-auto md:px-6 px-4 lg:mt-32 md:mt-40 mt-20 md:flex block w-full justify-between">
      <MeetUpLeft />
      <MeetUpRight />
    </div>
  );
};

export default MeetUpSection;
