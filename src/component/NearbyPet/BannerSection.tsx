import HeroSection from "./HeroSection";
import image1 from "./assets/div.banner-img-1.png";
import image2 from "./assets/div.banner-img-2.png";

const BannerSection = () => {
  return (
    <>
      <HeroSection
        title="Nearby pets"
        link1="Home"
        link2="Search"
        image1={image1}
        image2={image2}
      />
    </>
  );
};

export default BannerSection;
