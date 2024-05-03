import { Link, useNavigate } from "react-router-dom";
import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { useAppSelector } from "../../store/typedReduxHooks";

// const makeFirstCharacterUpperCase = (str: string) => {
//   const splittedStr = str.split("");
//   return splittedStr[0].toLocaleUpperCase() + splittedStr.splice(1).join("");
// };

const CommonDropdown = ({ animal, animal1, animal2, animal3 }) => {
  const user = useAppSelector((user) => user.user.user);

  return (
    <div className="w-full">
      <TEDropdown className="">
        <TERipple rippleColor="light" className="flex justify-between">
          <TEDropdownToggle tag="button" className="w-full cursor-pointer">
            {/* {makeFirstCharacterUpperCase(user?.userName)} */}
            <div className="w-[100%] flex justify-between">
              <p>{animal}</p>
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
            </div>
          </TEDropdownToggle>
        </TERipple>
        <TEDropdownMenu>
          <TEDropdownItem>
            <Link
              to=""
              className="block text-black  w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100  active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-500 dark:hover:bg-neutral-200 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              {animal1}
            </Link>
          </TEDropdownItem>
          <TEDropdownItem>
            <Link
              to=""
              className="block text-black  w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100  active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-500 dark:hover:bg-neutral-200 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              {animal2}
            </Link>
          </TEDropdownItem>
          <TEDropdownItem>
            <Link
              to=""
              className="block  text-black w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto  hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-500 dark:hover:bg-neutral-200 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            >
              {animal3}
            </Link>
          </TEDropdownItem>
        </TEDropdownMenu>
      </TEDropdown>
    </div>
  );
};

export default CommonDropdown;
