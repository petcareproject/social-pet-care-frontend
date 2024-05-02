import HeroSection from "../NearbyPet/HeroSection";
import image1 from "./assets/round1.png";
import image2 from "./assets/round2.png";

const BannerSection = () => {
  return (
    <div>
      <HeroSection
        title="About"
        link1="Home"
        link2="About"
        image1={image2}
        image2={image1}
      />
    </div>
  );
};

export default BannerSection;
