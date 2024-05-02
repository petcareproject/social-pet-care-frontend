import BannerSection from "./BannerSection";
import LogoHeader from "../HeroSection/LogoHeader";
import FooterSection from "../Footer/FooterSection";
import Navbar from "../HeroSection/Navbar";
import WelcomeSection from "./WelcomeSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import SocialPet from "./SocialPet";
import RegisterSection from "./RegisterSection";

const AboutUs = () => {
  return (
    <>
      <div className="bg-common">
        <Navbar />
        <LogoHeader />
        <div className="container mx-auto md:px-6 px-4">
          <BannerSection />
        </div>
      </div>

      <div className="container mx-auto md:px-6 px-4">
        <WelcomeSection />
      </div>

      <div className="bg-register py-14">
        <ThirdSection />
      </div>

      <div className="container mx-auto md:px-6 px-4">
        <SocialPet />
        <RegisterSection />
      </div>
      <div>
        <FooterSection />
      </div>
    </>
  );
};

export default AboutUs;
