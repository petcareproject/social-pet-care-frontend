import LoginSection from "./LoginSection";
import Button from "../ui/Button";
import login from "./assets/login.png";
import "../Style/Style.css";
import CommonHeader from "./CommonHeader";

const ResetPassword = () => {
  return (
    <>
      <div className="bg-login pt-[50px] pb-[80px]">
        <div className="container mx-auto md:px-6 px-4">
          <CommonHeader />
          <div className="md:flex justify-between md:mt-40 mt-10 w-full">
            <div className="md:w-[48%] hidden md:flex justify-center">
              <img src={login} alt=" Login image" />
            </div>
            <div className="lg:w-[40%] md:w-[50%] w-full pt-10 md:pt-0">
              <LoginSection
                heading="Reset Password"
                text="Enter your password for your account"
                label1="password"
                placeholder1="***************"
                label2="confirm password"
                placeholder2="***************"
              />
              <Button
                variant={{ theme: "dark", thickness: "thick", family: "font" }}
                className="md:w-[90%] w-full my-5 text-[16px] font-bold"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
