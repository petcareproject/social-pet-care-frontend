const CommonService = ({ image, heading, text, name }: any) => {
  return (
    <>
      <div className="text-center mb-10 md:mb-0 ">
        <img src={image} alt="image" className="mx-auto" />
        <div className="flex md:my-4 my-2 justify-center">
          <h1 className="text-4xl font-bold mr-2">{heading}</h1>
          <h1 className="text-[#FA441D] text-4xl font-bold">{text}</h1>
        </div>
        <p className="text-[#666666] md:text-[18px] text-[20px]">{name}</p>
      </div>
    </>
  );
};

export default CommonService;
