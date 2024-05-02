const HeroSection = ({ title, link1, link2, image1, image2 }: any) => {
  return (
    <>
      <div className="md:flex block justify-between py-[115px]">
        <div className="md:w-[50%] w-full text-center md:text-left md:mt-20 mt-10">
          <h1 className="text-[40px] font-semibold mb-5">{title}</h1>
          <p>
            <a href="#" className="text-[16px] font-semibold mr-2">
              {link1}
            </a>
            /
            <a href="#" className="text-[16px] font-semibold ml-2">
              {link2}
            </a>
          </p>
        </div>
        <div className="flex md:w-[50%] w-full justify-center mt-16 md:mt-0 md:justify-end">
          <div className="my-auto">
            <img src={image1} alt="image1" />
          </div>
          <div className="ml-[-75px]">
            <img src={image2} alt="image2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
