import HeroSection from "../NearbyPet/HeroSection";
import image1 from "./assets/div.banner-img-1.png";
import image2 from "./assets/div.banner-img-2.png";

const BannerSection = () => {
  return (
    <div>
      <HeroSection
        title="Stephen King"
        link1="Home"
        link2="Stephen king"
        image1={image1}
        image2={image2}
      />
    </div>
  );
};

export default BannerSection;
