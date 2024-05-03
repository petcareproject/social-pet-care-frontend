import msg from "../../assets/msg.png";
import call from "../../assets/call.png";
import USER_PLACEHOLDER from "../../assets/user-avatar.png";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../store/typedReduxHooks";
import Logoutmodal from "../modals/Logoutmodal";
import "../Style/Style.css";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useAppSelector((user) => user.user.user);

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  const redirectToSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="hidden px-4 container mx-auto w-full md:flex justify-between pt-5 mb-6">
        {user && (
          <div className="flex justify-between lg:w-[38%] md:w-[45%] w-full">
            <div className="flex justify-between">
              <img src={msg} alt="" className="" />
              <p className="lg:ml-2 md:ml-1 lg:text-[15px] md:text-[14px] mt-[2px]">
                {user.email}
              </p>
            </div>

            <div className="flex justify-end w-full">
              <img src={call} alt="" />
              <p className="lg:ml-2 md:ml-1 lg:text-[15px] md:text-[14px] mt-[2px]"></p>
              {user.userName}
            </div>
          </div>
        )}

        <div className="md:flex block md:justify-between md:w-[52%] lg:w-[50%] 2xl:w-[40%] w-full">
          <div>
            <ul className="flex justify-center">
              <li>
                <button className="lg:mr-2 md:mr-1 lg:text-[15px] md:text-[14px]">
                  Privacypolicy |
                </button>
              </li>
              <li>
                <button className="lg:text-[15px] md:text-[14px]">
                  Terms & condition
                </button>
              </li>
            </ul>
          </div>

          {!user && (
            <div className="flex justify-center">
              <button
                className="lg:mr-2 md:mr-1 cursor-pointer lg:text-[16px] md:text-[14px] mt-[2px]"
                onClick={redirectToLogin}
              >
                Login
              </button>
              /
              <button
                className="ml-2 cursor-pointer lg:text-[16px] md:text-[14px] mt-[2px]"
                onClick={redirectToSignup}
              >
                Resigter
              </button>
            </div>
          )}
          {user && (
            <div className="flex justify-center">
              <div className="flex justify-center">
                <img
                  src={USER_PLACEHOLDER}
                  alt=""
                  className="lg:mr-2 md:mr-1 lg:w-[17px] lg:h-[17px] md:w-[15px] md:h-[15px] mt-1"
                />
                <button
                  className="lg:mr-2 md:mr-1 cursor-pointer lg:text-[16px] md:text-[14px] mt-[2px]"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
        <ReactModal
          className="w-fit"
          overlayClassName="z-10 fixed  inset-0 bg-[rgba(0,0,0,0.5)] h-[100dvh] w-[100dvw]"
          onAfterOpen={() => {
            document.body.style.overflow = "hidden";
          }}
          isOpen={isModalOpen}
          onAfterClose={() => {
            document.body.style.overflow = "auto";
          }}
        >
          <Logoutmodal setIsModalOpen={setIsModalOpen} />
        </ReactModal>
      </div>
    </>
  );
};

export default Navbar;
