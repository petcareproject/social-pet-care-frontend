import CopyRight from "./CopyRight";
import FooterLogoSection from "./FooterLogoSection";
import QuickLinks from "./QuickLinks";
import WorkingSection from "./WorkingSection";

const FooterSection = () => {
  return (
    <div className="bg-footer">
      <div className="container w-full mx-auto md:px-6 px-4 py-16 md:flex block justify-between">
        <FooterLogoSection />
        <QuickLinks />
        <div className="md:hidden lg:block lg:w-[33%] w-full">
          <WorkingSection />
        </div>
      </div>
      <div className="md:block lg:hidden hidden w-[70%] m-auto mb-6">
        <WorkingSection />
      </div>
      <div className="border-b-[#FA441D] border"></div>
      <div className="container mx-auto">
        <CopyRight />
      </div>
    </div>
  );
};

export default FooterSection;
