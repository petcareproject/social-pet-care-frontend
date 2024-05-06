import Button from "../ui/Button";
import "../Style/Style.css";
import login from "./assets/login.png";
import { useState } from "react";
import OtpInput from "react-otp-input";
import CommonHeader from "./CommonHeader";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleChangePass = () => {
    navigate("/passwordchanged");
  };

  return (
    <>
      <div className="bg-login pt-[50px] pb-[80px]">
        <div className="container mx-auto md:px-6 px-4">
          <CommonHeader />

          <div className="flex justify-between md:mt-40 md:w-[90%] w-full">
            <div className="md:w-[48%] hidden md:flex justify-center">
              <img src={login} alt=" Login image" />
            </div>
            <div className="lg:w-[30%] md:w-[50%] mt-10 w-full text-center pt-12 md:pt-0">
              <p className="lg:text-[20px] md:text-[19px] text-[20px] text-gray-500 mx-5 ">
                Enter the code from the sms We sent to
                <span className="text-black ml-2">+91 9564568752</span>
              </p>
              <p className="my-4">02:32</p>

              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                containerStyle={{ display: "flex", justifyContent: "center" }}
                inputStyle={{
                  width: "40px",
                  height: "40px",
                  fontSize: "20px",
                  margin: "0 5px",
                  textAlign: "center",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
                // separatorStyle={{ margin: "0 5px", color: "#333" }}
                renderInput={(props, index) => (
                  <input
                    {...props}
                    style={props.style || {}}
                    maxLength={1}
                    autoFocus={index === 0}
                  />
                )}
              />

              <div className=" flex my-5 justify-center w-full">
                <h6 className="mr-[4px] font-semibold lg:text-[16px] md:text-[15px] text-[16px]">
                  Didn't Recieve Code?
                </h6>
                <a
                  href="#"
                  className="text-[#FF553E] font-bold uppercase lg:text-[16px] md:text-[15px] text-[16px]"
                >
                  Sent again
                </a>
              </div>
              <Button
                variant={{ theme: "dark", thickness: "thick" }}
                className="w-[90%] my-5 text-[16px] font-bold"
                onClick={handleChangePass}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Otp;
