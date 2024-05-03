import LogoHeader from "./LogoHeader";
import HeroRightSection from "./HeroRightSection";
import HeroLeftSection from "./HeroLeftSection";
import "../Style/Style.css";
// import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-image">
      {/* <Navbar /> */}
      <LogoHeader />
      <div className="md:flex block justify-between w-full container mx-auto md:px-6 px-4 mt-10">
        <HeroLeftSection />
        <HeroRightSection />
      </div>
    </div>
  );
};

export default Header;
