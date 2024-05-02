import FooterSection from "../Footer/FooterSection";
import LogoHeader from "../HeroSection/LogoHeader";
import Navbar from "../HeroSection/Navbar";
import BannerSection from "./BannerSection";
import CardSection from "./CardSection";

const Nearby = () => {
  return (
    <>
      <div>
        <div className="bg-common">
          <Navbar />
          <LogoHeader />
          <div className="container mx-auto md:px-6 px-4">
            <BannerSection />
          </div>
        </div>
        <div>
          <CardSection />
        </div>
        <div>
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default Nearby;
