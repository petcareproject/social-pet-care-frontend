import Button from "../ui/Button";
import dog_image from "./assets/pet8.png";
const RegisterSection = () => {
  return (
    <>
      <div className="md:flex block justify-between bg-yellow m-auto py-3 xl:my-20 my-10">
        <div className="md:w-[33%] block md:my-auto xl:px-16 md:px-7 px-5 text-center md:text-left my-6">
          <h6 className="xl:text-[35px] lg:text-[25px] text-[18px] font-bold">
            <span className="text-[#FF553E] mr-2">Register</span>
            your pet with us and Meet up!
          </h6>
        </div>

        <div className="md:w-[33%] flex justify-center bg-round relative">
          <img src={dog_image} alt="dog" />
        </div>

        <div className="md:w-[33%] block md:my-auto xl:px-16 md:px-7 px-5 text-center md:text-left my-6">
          <p className="text-[#212529] font-semibold text-[16px] line-clamp-2">
            We are your local dog home boarding service giving you complete
          </p>

          <Button
            variant={{ theme: "dark", thickness: "thick" }}
            className="rounded-full mt-4 md:px-8 md:py-3"
          >
            Register Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default RegisterSection;
