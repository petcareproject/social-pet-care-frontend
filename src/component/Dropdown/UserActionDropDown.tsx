import { Link } from "react-router-dom";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { useAppSelector } from "../../store/typedReduxHooks";
import { useState } from "react";
import ReactModal from "react-modal";
import Logoutmodal from "../modals/Logoutmodal";

const makeFirstCharacterUpperCase = (str: string) => {
  const splittedStr = str.split("");
  return splittedStr[0].toLocaleUpperCase() + splittedStr.splice(1).join("");
};

const UserActionDropDown = () => {
  const user = useAppSelector((user) => user.user.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <TEDropdown className="flex justify-center">
        <TERipple rippleColor="light">
          <TEDropdownToggle
            tag="button"
            className="flex items-center gap-1 cursor-pointer rounded bg-[#FF553E] text-white px-3  py-2"
          >
            {makeFirstCharacterUpperCase(user?.userName)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              width="20px"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </TEDropdownToggle>
        </TERipple>
        <TEDropdownMenu>
          <TEDropdownItem>
            <Link
              to="/userprofile"
              className="block text-black  w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100  active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-500 dark:hover:bg-neutral-200 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              User Profile
            </Link>
          </TEDropdownItem>
          <TEDropdownItem>
            <Link
              to="/form"
              className="block text-black  w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100  active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-500 dark:hover:bg-neutral-200 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              Add your pet
            </Link>
          </TEDropdownItem>
          <TEDropdownItem>
            <Link
              to={"/change_password"}
              className="block text-black w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-500 dark:hover:bg-neutral-200 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              Change Password
            </Link>
          </TEDropdownItem>

          <TEDropdownItem>
            <Link
              className="md:block hidden text-black w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-500 dark:hover:bg-neutral-200 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              onClick={handleLogout}
              // to="/"
              to=""
            >
              Logout
            </Link>
          </TEDropdownItem>

          <TEDropdownItem>
            <Link
              className="md:hidden block text-black w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-500 dark:hover:bg-neutral-200 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
              // onClick={handleLogout}
              to="/login"
            >
              Logout
            </Link>
          </TEDropdownItem>
        </TEDropdownMenu>
      </TEDropdown>

      <ReactModal
        className="w-fit z-40 "
        overlayClassName="z-10 fixed inset-0 bg-[rgba(0,0,0,0.5)] h-[100dvh] w-[100dvw]"
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
  );
};

export default UserActionDropDown;
