import FooterSection from "../Footer/FooterSection";
import LogoHeader from "../HeroSection/LogoHeader";
// import Navbar from "../HeroSection/Navbar";
import ProfileSection from "./ProfileSection";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const [isLogin, setIsLogin] = useState(false);

  const checkLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="bg-userprofile">
      {/* <Navbar /> */}
      <LogoHeader />

      <div className="container mx-auto md:px-6 px-4 relative mt-10">
        <ProfileSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default UserProfile;
