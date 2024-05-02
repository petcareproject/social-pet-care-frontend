import SearchBar from "./Searchbar";

const HeroLeftSection = () => {
  return (
    <>
      <div className="md:w-[50%] w-full xl:pr-[115px] lg:pr-[40px] lg:mt-[65px] md:mt-[50px] z-10 pt-10 md:pt-0 mt">
        <h1 className="xl:text-[76px] text-center md:text-left text-[40px] leading-tight font-bold mt-10">
          Take a Good care of pets.
        </h1>
        <p className="xl:text-[26px] lg:text-[22px] text-[18px] mb-10 md:mb-0 xl:leading-9 lg:leading-56 text-center md:text-left xl:w-[95%] 2xl:w-[85%] w-full text-[#555555] lg:mt-5 md:mt-4 mt-6">
          We are your local dog home boarding service giving you complete.
        </p>
        <SearchBar />
      </div>
    </>
  );
};

export default HeroLeftSection;
