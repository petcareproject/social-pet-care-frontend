import LogoHeader from "../HeroSection/LogoHeader";
import Navbar from "../HeroSection/Navbar";
import ProfileSection from "./ProfileSection";

const UserProfile = () => {
  return (
    <div className="bg-userprofile">
      <Navbar />
      <LogoHeader />
      <div className="container mx-auto md:px-6 px-4 relative mt-10">
        <ProfileSection />
      </div>
    </div>
  );
};

export default UserProfile;
