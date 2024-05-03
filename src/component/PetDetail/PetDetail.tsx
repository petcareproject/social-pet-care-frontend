import FooterSection from "../Footer/FooterSection";
import LogoHeader from "../HeroSection/LogoHeader";
// import Navbar from "../HeroSection/Navbar";
import BannerSection from "./BannerSection";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import "../Style/Style.css";

const PetDetail = () => {
  return (
    <>
      <div className="bg-common">
        {/* <Navbar /> */}
        <LogoHeader />
        <div className="container mx-auto md:px-6 px-4">
          <BannerSection />
        </div>
      </div>
      <div className="nearbybg-image ">
        <div className="w-full container mx-auto md:pt-16 pt-20 md:px-6 px-4 md:flex block justify-between">
          <DetailLeft />
          <DetailRight />
        </div>
      </div>
      <div>
        <FooterSection />
      </div>
    </>
  );
};

export default PetDetail;
