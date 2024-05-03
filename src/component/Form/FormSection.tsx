import FooterSection from "../Footer/FooterSection";
import LogoHeader from "../HeroSection/LogoHeader";
// import Navbar from "../HeroSection/Navbar";
import FormLeftSection from "./FormLeftSection";
import FormRightSection from "./FormRightSection";

const FormSection = () => {
  return (
    <>
      <div className="bg-form">
        {/* <Navbar /> */}
        <LogoHeader />
        <div className="my-20 container mx-auto md:px-6 px-4">
          <h1 className="text-center text-[40px] font-semibold mb-10 mt-5 md:mt-0">
            List your pet
          </h1>
          <div className="md:flex justify-between mt-12 pb-4">
            <FormLeftSection />
            <FormRightSection />
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default FormSection;
