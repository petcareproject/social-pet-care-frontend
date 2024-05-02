import paw from "../assets/paw.png";

const WorkSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full items-center pb-8">
        <img src={paw} alt="Paw image" className="w-[67px] h-[49px]" />
        <h6 className="uppercase text-[18px] text-[#FA441D] my-3">
          Registered Your Pets with Us
        </h6>
        <h1 className="font-semibold text-[43px]">How this works</h1>
      </div>
    </>
  );
};

export default WorkSection;
