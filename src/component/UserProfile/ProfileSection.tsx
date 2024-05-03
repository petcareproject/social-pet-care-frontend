import { useEffect, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import profile from "./assets/profile.svg";
import client_image from "./assets/jesica.png";
import Mask1 from "./assets/Mask1.svg";
import img1 from "./assets/pet1.png";
import img2 from "./assets/pet2.png";
import img3 from "./assets/pet3.png";
import img4 from "./assets/pet4.png";
import img5 from "./assets/pet5.png";
import img6 from "./assets/pet6.png";
import last from "./assets/last.png";
import paw from "./assets/paw.svg";
import pawimage from "../NearbyPet/assets/footprint-shape_svgrepo.com.png";
import ReactModal from "react-modal";
import UserLogoutModal from "../modals/UserLogoutModal";
import P from "../ui/P1";
import logout from "./assets/logout.png";
import { PET_ENDPOINTS } from "../../utlis/apiRoutes";
import http from "../../http/http";
import { useNavigate } from "react-router-dom";

const data = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
];

const ProfileSection = () => {
  const [dataa, setDataa] = useState([]);
  const [verticalActive, setVerticalActive] = useState("tab1");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerticalClick = (value: string) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  const handleLogout = () => {
    setIsModalOpen(true);
  };
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  const handleClick = async () => {
    const token = localStorage.getItem("auth_token");
    console.log("tokenn", token);
    if (token) {
      try {
        const url = PET_ENDPOINTS.petList;
        const response = await http.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const responseData = response.data;
        console.log("data", responseData.data);
        console.log();
        setDataa(responseData.data);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  useEffect(() => {
    handleClick();
  }, []);

  const navigate = useNavigate();
  const redirectToAddPet = () => {
    navigate("/form");
  };

  return (
    <>
      <div>
        <div className="lg:flex hidden justify-between py-20">
          <div className="xl:w-[20%] w-[22%]">
            <TETabs vertical className="tab-style hover:text-white">
              <TETabsItem
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                <div className="flex bg-[#FF553E] xl:p-4 lg:p-2 xl:mt-0 lg:mt-4 rounded-xl">
                  <img src={profile} alt="profile" className="mr-2" />
                  <p className="xl:text-[20px] lg:text-[18px] text-white">
                    Profile
                  </p>
                </div>
              </TETabsItem>

              <TETabsItem
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                <div className="flex hover:bg-[#FF553E] xl:mt-0 lg:mt-4 rounded-xl hover:text-white text-black xl:p-4 lg:p-2">
                  <img src={paw} alt="profile" className="mr-2" />
                  <p
                    className="xl:text-[20px] lg:text-[18px] "
                    onClick={handleClick}
                  >
                    Pet list
                  </p>
                </div>
              </TETabsItem>
            </TETabs>

            <div className="flex xl:mt-5 lg:mt-4 ml-4" onClick={handleLogout}>
              <img
                src={logout}
                alt="Logout icon"
                className="w-[20px] h-[18px] mt-[5px]"
              />
              <h6 className="ml-2 xl:text-[20px] lg:text-[18px] text-[#FF0000]">
                Logout
              </h6>
            </div>
          </div>

          <ReactModal
            className="w-fit"
            overlayClassName="z-10 fixed inset-0 bg-[rgba(0,0,0,0.5)] h-[100dvh] w-[100dvw]"
            onAfterOpen={() => {
              document.body.style.overflow = "hidden";
            }}
            isOpen={isModalOpen}
            onAfterClose={() => {
              document.body.style.overflow = "auto";
            }}
          >
            <UserLogoutModal setIsModalOpen={setIsModalOpen} />
          </ReactModal>

          <TETabsContent className="xl:w-[77%] w-[76%]">
            <TETabsPane
              show={verticalActive === "tab1"}
              className=""
              id="profile"
            >
              <div className="flex justify-between bg-white shadow-xl rounded-xl p-6 mb-8">
                <div className="xl:w-[18%] w-[23%] my-auto">
                  <img src={client_image} alt="Client Image" />
                </div>
                <div className="xl:w-[80%] md:w-[75%] w-[50%]">
                  <div>
                    <div className="flex">
                      <h1 className="xl:text-[28px] text-[25px] font-semibold">
                        Jessica Sympson
                      </h1>
                      <img
                        src={Mask1}
                        alt="Edit btn"
                        className="xl:ml-5 ml-3"
                      />
                    </div>
                    <p className="xl:text-[18px] text-[15px] xl:mt-4 mt-1">
                      - So be careful, Grumpy Lina
                    </p>
                    <hr className="xl:my-5 my-3" />
                  </div>

                  <div className="xl:w-[60%] w-[70%] flex justify-between">
                    <div>
                      <P
                        variant={{ weight: "normal" }}
                        className="text-[#8C8E97] mb-2 xl:text-[20px] text-[18px]"
                      >
                        Phone Number
                      </P>
                      <P
                        variant={{ weight: "normal" }}
                        className="text-[#8C8E97] mb-2 xl:text-[20px] text-[18px]"
                      >
                        City
                      </P>
                      <P
                        variant={{ weight: "normal" }}
                        className="text-[#8C8E97] mb-2 xl:text-[20px] text-[18px]"
                      >
                        Email
                      </P>
                    </div>
                    <div>
                      <P
                        variant={{ weight: "medium" }}
                        className="xl:text-[20px] text-[18px] mb-2"
                      >
                        +44 123456789
                      </P>
                      <P
                        variant={{ weight: "medium" }}
                        className="xl:text-[20px] text-[18px] mb-2"
                      >
                        New York
                      </P>
                      <P
                        variant={{ weight: "medium" }}
                        className="xl:text-[20px] text-[18px] mb-2"
                      >
                        jessica003@gmail.com
                      </P>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" bg-white shadow-xl rounded-xl p-6 mb-8">
                <div className="flex mb-4">
                  <h6 className="xl:text-[20px] text-[18px] font-semibold">
                    Freely about yourself
                  </h6>
                  <img src={Mask1} alt="Edit btn" className="ml-6" />
                </div>
                <p className="text-[#707070] xl:text-[20px] text-[18px]">
                  Write a few lines about yourself and your character. Tell us
                  about your achievements, priorities and life experience. This
                  way your profile will become more interesting and attract more
                  attention.
                </p>
              </div>

              <div className=" bg-white shadow-xl rounded-xl p-6 mb-8">
                <div className="flex justify-between">
                  <h6 className="xl:text-[20px] text-[18px] font-semibold mb-4">
                    My Pets
                  </h6>
                </div>
                <div className="flex">
                  {data.map((item, index) => (
                    <div key={index} className="m-1">
                      <img src={item.img} alt="Images" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end w-full">
                <button className="bg-white text-black px-14 rounded-lg mr-2 font-bold text-[16px] py-3 shadow-lg">
                  Cancle
                </button>
                <button className="bg-[#FF553E] text-white px-14 rounded-lg py-3 font-bold text-[16px] shadow-lg">
                  Save
                </button>
              </div>
            </TETabsPane>

            <TETabsPane show={verticalActive === "tab2"} className="">
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  justify-center">
                <div className="p-4 flex justify-center">
                  <div className="relative">
                    <div className="p-6 shadow-lg bg-white rounded-b-lg w-[270px] h-[190px]">
                      <img
                        src={last}
                        alt="add pet"
                        className="m-auto w-[100px] h-[100px] mt-[10px]"
                        onClick={redirectToAddPet}
                      />
                    </div>
                  </div>
                </div>

                {dataa.map((pet, index) => (
                  <div key={index} className="p-4 flex justify-center">
                    <div className="relative">
                      <img src={pet.petProfile} alt="" />
                      <div className="p-6 shadow-lg bg-white rounded-b-lg">
                        <h1 className="text-[24px] font-semibold">
                          {pet.petName}
                        </h1>
                        <div className="flex my-2">
                          <img
                            src={pet.petProfile}
                            alt="homedfgg"
                            className="w-[15px] h-[16px]"
                          />
                          <p className="text-[16px] text-[#818181] ml-2">
                            {pet.address}
                          </p>
                          <p className="text-[16px] text-[#818181] ml-2">
                            {pet.location}
                          </p>
                        </div>
                        <div className="flex mt-1">
                          <h6 className="text-[16px] font-bold">Age:</h6>
                          <p className="text-[16px] ml-2">{pet.dob}</p>
                        </div>
                        <div className="flex justify-between">
                          <div className="flex my-2">
                            <h6 className="text-[16px] font-bold">Breed:</h6>
                            <p className="text-[16px] ml-2">{pet.petBreads}</p>
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
            </TETabsPane>
          </TETabsContent>
        </div>
        {/* -----------------------------------------Responsive tabs------------------------------------------------------- */}
        <div className="lg:hidden block md:pt-4 sm:pt-20 pt-10">
          <div className="mb-10">
            <TETabs>
              <TETabsItem
                onClick={() => handleBasicClick("tab1")}
                active={basicActive === "tab1"}
                className="hover:bg-transparent p-0 border-none mx-2 pt-0 mt-0 "
              >
                <div className="flex sm:bg-[#FF553E] xl:p-4 lg:p-2 xl:mt-0 lg:mt-4 rounded-xl sm:px-4 sm:py-2 p-0">
                  <img
                    src={profile}
                    alt="profile"
                    className="mr-2 w-[22px] h-[22px] sm:block hidden"
                  />
                  <p className="xl:text-[20px] lg:text-[18px] sm:text-[15px] text-[12px] sm:text-white text-black sm:hover:border-none hover:border-b-2 border-b-[#FF553E]">
                    Profile
                  </p>
                </div>
              </TETabsItem>

              <TETabsItem
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
                className="hover:bg-transparent p-0 border-none mx-2 pt-0 mt-0"
              >
                <div className="flex sm:hover:bg-[#FF553E] sm:px-4 sm:py-2 p-0 xl:mt-0 lg:mt-4 rounded-xl sm:hover:text-white text-black xl:p-4 lg:p-2">
                  <img
                    src={paw}
                    alt="profile"
                    className="mr-2 w-[22px] h-[22px] sm:block hidden"
                  />
                  <p className="xl:text-[20px] lg:text-[18px] sm:text-[15px] text-[12px] sm:hover:border-none hover:border-b-2 border-b-[#FF553E]">
                    Pet list
                  </p>
                </div>
              </TETabsItem>

              <div className="flex xl:mt-5 lg:mt-4 sm:mt-[30px] mt-[22px] sm:ml-4 ml-2">
                <h6
                  onClick={handleLogout}
                  className="sm:ml-2 ml-0 xl:text-[20px] lg:text-[18px] sm:text-[15px] text-[12px] text-[#FF0000] sm:hover:border-none hover:border-b-2 border-b-[#FF553E]"
                >
                  Logout
                </h6>
              </div>
            </TETabs>

            <ReactModal
              className="w-fit"
              overlayClassName="z-10 fixed inset-0 bg-[rgba(0,0,0,0.5)] h-[100dvh] w-[100dvw]"
              onAfterOpen={() => {
                document.body.style.overflow = "hidden";
              }}
              isOpen={isModalOpen}
              onAfterClose={() => {
                document.body.style.overflow = "auto";
              }}
            >
              <UserLogoutModal setIsModalOpen={setIsModalOpen} />
            </ReactModal>

            <TETabsContent className="w-full">
              <TETabsPane show={basicActive === "tab1"}>
                <div className="block sm:flex justify-between bg-white shadow-xl rounded-xl p-6 mb-8">
                  <div className="xl:w-[18%] md:w-[23%] sm:w-[30%] w-full sm:my-auto flex justify-center sm:block">
                    <img src={client_image} alt="Client Image" />
                  </div>
                  <div className="xl:w-[80%] md:w-[75%] sm:w-[65%] w-full">
                    <div>
                      <div className="flex mt-8 sm:mt-0 justify-center sm:text-left">
                        <h1 className="xl:text-[28px] lg:text-[25px] text-[22px] font-semibold">
                          Jessica Sympson
                        </h1>
                        <img
                          src={Mask1}
                          alt="Edit btn"
                          className="xl:ml-5 ml-3"
                        />
                      </div>
                      <p className="xl:text-[18px] text-[15px] xl:mt-4 mt-1 sm:text-left text-center">
                        - So be careful, Grumpy Lina
                      </p>
                      <hr className="xl:my-5 lg:my-3 my-2" />
                    </div>

                    <div className="xl:w-[60%] lg:w-[70%] sm:w-[95%] w-full flex justify-between">
                      <div>
                        <P
                          variant={{ weight: "normal" }}
                          className="text-[#8C8E97] mb-2 xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px]"
                        >
                          Phone Number
                        </P>
                        <P
                          variant={{ weight: "normal" }}
                          className="text-[#8C8E97] mb-2 xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px]"
                        >
                          City
                        </P>
                        <P
                          variant={{ weight: "normal" }}
                          className="text-[#8C8E97] mb-2 xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px]"
                        >
                          Email
                        </P>
                      </div>
                      <div>
                        <P
                          variant={{ weight: "medium" }}
                          className="xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] mb-2"
                        >
                          +44 120 65 564 25
                        </P>
                        <P
                          variant={{ weight: "medium" }}
                          className="xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] mb-2"
                        >
                          New York
                        </P>
                        <P
                          variant={{ weight: "medium" }}
                          className="xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] mb-2"
                        >
                          jessica003@gmail.com
                        </P>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" bg-white shadow-xl rounded-xl p-6 mb-8">
                  <div className="flex mb-4">
                    <h6 className="xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] font-semibold">
                      Freely about yourself
                    </h6>
                    <img src={Mask1} alt="Edit btn" className="xl:ml-6 ml-4" />
                  </div>
                  <p className="text-[#707070] xl:text-[20px] lg:text-[18px] sm:test-[16px] text-[14px]">
                    Write a few lines about yourself and your character. Tell us
                    about your achievements, priorities and life experience.
                    This way your profile will become more interesting and
                    attract more attention.
                  </p>
                </div>

                <div className=" bg-white shadow-xl rounded-xl p-6 mb-8">
                  <div className="flex justify-between">
                    <h6 className="xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] font-semibold mb-4">
                      My Pets
                    </h6>
                    <h6 className="text-[#FF553E] xl:text-[20px] lg:text-[18px] sm:text-[16px] text-[14px] font-semibold mb-4">
                      All Pets
                    </h6>
                  </div>
                  <div className="flex">
                    {data.map((item, index) => (
                      <div key={index} className="m-1">
                        <img src={item.img} alt="Images" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end w-full">
                  <button className="bg-white text-black px-14 rounded-lg mr-2 font-bold text-[16px] py-3 shadow-lg">
                    Cancle
                  </button>
                  <button className="bg-[#FF553E] text-white px-14 rounded-lg py-3 font-bold text-[16px] shadow-lg">
                    Save
                  </button>
                </div>
              </TETabsPane>

              <TETabsPane show={basicActive === "tab2"}>
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  justify-center">
                  {dataa.map((pet, index) => (
                    <div key={index} className="p-4 flex justify-center">
                      <div className="relative">
                        <img src={pet.petProfile} alt="" />
                        <div className="p-6 shadow-lg bg-white rounded-b-lg">
                          <h1 className="text-[24px] font-semibold">
                            {pet.petName}
                          </h1>
                          <div className="flex my-2">
                            <img
                              src={pet.petProfile}
                              alt="home"
                              className="w-[15px] h-[16px]"
                            />
                            <p className="text-[16px] text-[#818181] ml-2">
                              {pet.address}
                            </p>
                            <p className="text-[16px] text-[#818181] ml-2">
                              {pet.location}
                            </p>
                          </div>
                          <div className="flex mt-1">
                            <h6 className="text-[16px] font-bold">Age:</h6>
                            <p className="text-[16px] ml-2">{pet.dob}</p>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex my-2">
                              <h6 className="text-[16px] font-bold">Breed:</h6>
                              <p className="text-[16px] ml-2">
                                {pet.petBreads}
                              </p>
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
              </TETabsPane>
            </TETabsContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
