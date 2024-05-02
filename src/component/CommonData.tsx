import Button from "./ui/Button";

const CommonData = ({ img1, span, heading, description, btn }: any) => {
  return (
    <>
      <div className="flex mt-10 md:mt-0 lg:ml-4">
        <img src={img1} alt="" />
        <p className="ml-2 mt-1 text-[14px] font-semibold ">{span}</p>
      </div>

      <div className="lg:w-[100%] xl:w-[75%] lg:ml-4 w-full mt-4 mb-6">
        <h1 className="lg:text-[40px] text-[32px] font-semibold">{heading}</h1>
        <p className="2xl:text-[18px] text-[16px] mt-4">{description}</p>
      </div>

      {btn && (
        <>
          <Button
            variant={{ theme: "dark", thickness: "thick" }}
            className="rounded-full md:mt-6 mt-[-15px]"
          >
            {btn}
          </Button>
        </>
      )}
    </>
  );
};

export default CommonData;
