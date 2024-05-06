import Button from "../ui/Button";
import CommonHeader from "./CommonHeader";
import paschange from "./assets/passwrd_chngd.png";
import "../Style/Style.css";
import { useNavigate } from "react-router-dom";

const PasswordChangedSuccessPage = () => {
  const navigate = useNavigate();
  const redirectedToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <div>
        <div className="bg-chngpas pt-[50px] pb-[80px]">
          <div className="container mx-auto md:px-6 px-4">
            <CommonHeader />

            <div className="lg:w-[31%] md:w-[80%] w-full mx-auto mt-20">
              <img src={paschange} alt="password changed image" />
              <div className="text-center">
                <h1 className="text-[40px] font-bold">
                  Password change Successfully
                </h1>
                <p className="text-[16px] my-8">
                  {/* Now you can login your account. just click below on button and
                  login again. after login you will be redirect to home page\\\ */}
                  Your one time password has been send to your email.You can
                  change the password.
                </p>
                <Button
                  variant={{ theme: "dark", thickness: "thick" }}
                  className="w-[90%] my-5 text-[16px] font-bold"
                  onClick={redirectedToLogin}
                >
                  Login Again
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordChangedSuccessPage;
