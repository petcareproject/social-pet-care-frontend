import cloudImage from "./assets/cloud-add.svg";
import deleteIcon from "./assets/delete.png";
import rightIcon from "./assets/tick-circle.png";
import photoImage from "./assets/photo_svgrepo.com.png";
import FileUploader from "../UploadFile/FileUploader";

const FormLeftSection = () => {
  return (
    <>
      <div className="md:w-[48%] w-full">
        <div className="border-dashed border-2 border-[#FFE3E3] rounded-2xl text-center px-8 lg:py-16 md:py-8 py-8 mt-4">
          <div className="flex justify-center">
            <button>
              <img src={cloudImage} alt="Image icon" className="mb-8" />
            </button>
          </div>
          <div>
            <p className="mb-4">Choose a file or drag & drop it here</p>
            <p className="text-[#A9ACB4] mb-10">
              JPEG, PNG, PDG and MP4 formaes, up tp 50MB
            </p>
          </div>

          {/* <button
            type="button"
            className="border-2 border-[#FFE3E3] px-8 py-4 rounded-md font-semibold"
          >
            Browser File
          </button> */}
          <FileUploader />
        </div>

        <div className="flex justify-between bg-[#F9F2E4] rounded-2xl px-4 lg:py-8 md:py-4 py-4 mt-10">
          <img src={photoImage} alt="imageicon" />
          <div className="lg:pl-6 pl-2 w-full pt-3  ">
            <div className="flex justify-between w-full lg:mb-4 mb-2">
              <p className="font-semibold lg:text-[18px] md:text-[15px] text-[14px]">
                Google-certificate.pdf
              </p>
              <img
                src={deleteIcon}
                alt="delete icon"
                className="w-[14px] h-[19px]"
              />
            </div>
            <div className="lg:w-[80%] w-full lg:flex justify-between">
              <p className="lg:text-[18px] md:text-[15px] text-[15px]">
                94 KB of 94 KB{" "}
              </p>
              <div className="flex md:w-[50%] lg:w-[28%] w-[28%] justify-between">
                <img src={rightIcon} alt="right icon" />
                <p className="lg:text-[18px] md:text-[15px] text-[15px] ml-2">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLeftSection;
