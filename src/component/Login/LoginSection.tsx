import { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const LoginSection = ({
  heading,
  text,
  label1,
  placeholder1,
  label2,
  placeholder2,
  handleChange,
}: any) => {
  const [isVisiblePass, setVisiblePass] = useState<boolean>(false);
  return (
    <>
      <div className="md:w-[90%] w-full">
        <h1 className="text-[34px] font-bold mb-4">{heading}</h1>
        <p className="md:text-[22px] text-[20px] mb-8">{text}</p>
        <div className="block">
          <label className="md:text-[10px] text-[14px] uppercase w-full text-[#666666]">
            {label1}
          </label>
          <input
            type="text"
            placeholder={placeholder1}
            name="email"
            // className="text-[18px] outline-none w-full bg-transparent mt-4 mb-6 border-black border-b-2  pb-4"
            className=" outline-none w-full bg-transparent lg:mt-4 md:mt-2 mt-2 md:mb-6 mb-4 border-black border-b-2 text-black md:pb-4 pb-2"
            onChange={handleChange}
          />
        </div>
        <div className="block">
          {label2 && placeholder2 && (
            <>
              <label className="md:text-[10px] text-[14px] uppercase w-full text-[#666666]">
                {label2}
              </label>
              <input
                type={!isVisiblePass ? "password" : "text"}
                name="password"
                placeholder={placeholder2}
                // className=" outline-none w-full bg-transparent mt-4 mb-6 border-black border-b-2 text-black pb-4"
                className="relative outline-none w-full bg-transparent lg:mt-4 md:mt-2 mt-2 md:mb-6 mb-4 border-black border-b-2 text-black md:pb-4 pb-2"
                onChange={handleChange}
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginSection;
