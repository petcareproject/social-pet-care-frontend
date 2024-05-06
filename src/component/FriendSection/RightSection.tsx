import dogimage from "./assets/2150007413-removebg-preview 1.png";
const RightSection = () => {
  return (
    <>
      <div className="dog-image md:w-[50%] ">
        <img src={dogimage} alt="dogs image" className="w-full h-full" />
      </div>
    </>
  );
};

export default RightSection;
