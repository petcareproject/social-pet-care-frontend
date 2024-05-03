import { Button } from "react-bootstrap";
import login from "./../Login/assets/login.png";
import CommonHeader from "../Login/CommonHeader";
import { useState } from "react";
import useChangePassword from "../../http/ChangePassword";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const ChangePass = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutate: changePassword, isPending } = useChangePassword();
  const [isVisiblePass, setVisiblePass] = useState<boolean>(false);
  const [isnewPass, setNewPass] = useState<boolean>(false);
  const [iscnfrmNewPass, setcnfrmNewPass] = useState<boolean>(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const body = {
      currentPassword,
      newPassword,
      confirmPassword,
    };
    changePassword(body as any);
  };

  return (
    <>
      <div>
        <div className="bg-login flex flex-col px-1 py-2">
          <div className=" px-10">
            <CommonHeader />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="md:flex justify-center gap-10  items-center w-full  container mx-auto px-4">
              <div className="md:w-[48%] hidden md:flex justify-center">
                <img src={login} alt=" Login image" />
              </div>
              <div className="lg:w-[40%]  w-full pt-10 md:pt-0 ">
                <h1 className="text-[34px] font-bold mb-4">Change Password</h1>
                <p className="md:text-[22px] text-[20px] mb-8">
                  Enter your current password to change password
                </p>
                <form onSubmit={handleFormSubmit}>
                  <div>
                    <label className="text-[10px] uppercase w-full text-[#666666]">
                      Current Password
                    </label>
                    <input
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      value={currentPassword}
                      type={!isVisiblePass ? "password" : "text"}
                      name="password"
                      placeholder="***************"
                      className=" outline-none w-full bg-transparent lg:mt-4 md:mt-0 mt-2 md:mb-6 mb-4 border-black border-b-2 text-black md:pb-4 pb-2"
                    />
                    <button
                      type="button"
                      className="absolute ml-[-30px] mt-[14px]"
                      onClick={() => setVisiblePass(!isVisiblePass)}
                    >
                      {isVisiblePass ? (
                        <IoEyeOutline className="w-[30px] h-[22px]" />
                      ) : (
                        <IoEyeOffOutline className="w-[30px] h-[22px]" />
                      )}
                    </button>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase w-full text-[#666666]">
                      New Password
                    </label>
                    <input
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                      type={!isnewPass ? "password" : "text"}
                      name="password"
                      placeholder="***************"
                      className=" outline-none w-full bg-transparent lg:mt-4 md:mt-0 mt-2 md:mb-6 mb-4 border-black border-b-2 text-black md:pb-4 pb-2"
                    />
                    <button
                      type="button"
                      className="absolute ml-[-30px] mt-[14px]"
                      onClick={() => setNewPass(!isnewPass)}
                    >
                      {isnewPass ? (
                        <IoEyeOutline className="w-[30px] h-[22px]" />
                      ) : (
                        <IoEyeOffOutline className="w-[30px] h-[22px]" />
                      )}
                    </button>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase w-full text-[#666666]">
                      Confirm New Password
                    </label>
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      type={!iscnfrmNewPass ? "password" : "text"}
                      name="password"
                      placeholder="***************"
                      className=" outline-none w-full bg-transparent lg:mt-4 md:mt-0 mt-2 md:mb-6 mb-4 border-black border-b-2 text-black md:pb-4 pb-2"
                    />
                    <button
                      type="button"
                      className="absolute ml-[-30px] mt-[14px]"
                      onClick={() => setcnfrmNewPass(!iscnfrmNewPass)}
                    >
                      {iscnfrmNewPass ? (
                        <IoEyeOutline className="w-[30px] h-[22px]" />
                      ) : (
                        <IoEyeOffOutline className="w-[30px] h-[22px]" />
                      )}
                    </button>
                  </div>
                  <p className="lg:mt-4 md:mt-0 mt-4 text-[13px]">
                    By creating an account, you agree to the{" "}
                    <a className="underline mr-1"> Terms of use</a>
                    and
                    <a className="underline ml-1"> Privacy Policy</a>.
                  </p>
                  <Button
                    disabled={isPending}
                    type="submit"
                    className="w-full my-5 text-[16px] bg-[#FF553E] text-white py-3"
                  >
                    {isPending ? "...Loading" : "Continue"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePass;
