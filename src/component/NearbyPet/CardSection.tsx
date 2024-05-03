// import search from "./assets/search.png";
import image1 from "./assets/div.dt-sc-team-thumb.png";
import image2 from "./assets/team-thumb2.png";
import image3 from "./assets/sitter3.jpg.png";
import image4 from "./assets/team-thumb3.png";
import image5 from "./assets/sitter8.jpg";
import image6 from "./assets/sitter5.jpg";
import image7 from "./assets/team-thumb4.png";
import image9 from "./assets/sitter7.jpg";
import home from "./assets/Icon.png";
import hearticon from "./assets/heart.png";
import { useState } from "react";

import pawimage from "./assets/footprint-shape_svgrepo.com.png";

const data = [
  {
    image: image1,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image2,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image3,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image4,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image5,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image6,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image7,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
  {
    image: image9,
    title: "Stephen King",
    img2: home,
    country: "Cambridge ,UK",
    age: "2+ Yrs",
    bread: "Bulldog",
    heart: hearticon,
  },
];

const CardSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="nearbybg-image pt-[100px]">
        <div className="container w-[95%] mx-auto">
          <div className="lg:flex w-full block justify-center md:px-10">
            <div className="lg:w-[30%] w-full text-center">
              <h6 className="font-semibold text-[20px] mt-3 mb-4">
                Showing 1-9 of 12 results
              </h6>
            </div>
            <div className="md:flex lg:w-[50%] w-full justify-between">
              <div className="dropdown inline-block relative md:w-[48%] w-full mt-4 md:mt-0">
                <button
                  className="px-10 py-4 border border-black rounded-full w-full  text-gray-700 font-semibold items-center flex justify-between z-1"
                  onClick={toggleDropdown}
                >
                  <span className="mr-1">Dropdown</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                {isOpen && (
                  <ul className="dropdown-menu absolute bg-[#ff553e] text-white pt-1 w-full rounded-lg z-10">
                    <li>
                      <a
                        className="rounded-t  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li>
                      <a
                        className=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                  </ul>
                )}
                {isOpen && (
                  <div
                    className="fixed top-0 left-0 w-full h-full "
                    onClick={closeDropdown}
                  ></div>
                )}
              </div>
            </div>
          </div>

          {/* ---------------------------------- */}

          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-20 justify-center">
            {data.map((item, index) => (
              <div key={index} className="p-4 flex justify-center">
                <div className="relative">
                  <img src={item.image} alt="" />
                  <div className="p-6 shadow-lg bg-white rounded-b-lg">
                    <h1 className="text-[24px] font-semibold">{item.title}</h1>
                    <div className="flex my-2">
                      <img
                        src={item.img2}
                        alt="home"
                        className="w-[15px] h-[16px]"
                      />
                      <p className="text-[16px] text-[#818181] ml-2">
                        {item.country}
                      </p>
                    </div>
                    <div className="flex mt-1">
                      <h6 className="text-[16px] font-bold">Age:</h6>
                      <p className="text-[16px] ml-2">{item.age}</p>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex my-2">
                        <h6 className="text-[16px] font-bold">Breed:</h6>
                        <p className="text-[16px] ml-2">{item.bread}</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-[#FA441D] rounded-lg opacity-0 hover:opacity-95 transition-opacity flex items-center justify-center">
                    <div className="text-center ">
                      <div className="flex justify-center">
                        <img src={pawimage} alt="paw image" />
                      </div>
                      <a href="/detail">
                        <h1 className="text-white z-10 text-[20px]">
                          View Profile
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
