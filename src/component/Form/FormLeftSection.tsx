import deleteIcon from "./assets/delete.png";
import rightIcon from "./assets/tick-circle.png";
import { useRef, useState } from "react";
import DefaultImage from "./assets/cloud-add.svg";

const FormLeftSection = () => {
  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const [imageName, setImageName] = useState("Image name");
  const [imageSize, setImageSize] = useState("0");

  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = async () => {
    try {
      const uploadedFile = fileUploadRef.current.files[0];
      console.log("uploadedFile", uploadedFile);
      setImageName(uploadedFile.name);

      setImageSize((uploadedFile.size / 1024).toFixed(2));

      const formData = new FormData();
      console.log("formData", formData);

      formData.append("file", uploadedFile);

      const cachedURL = URL.createObjectURL(uploadedFile);
      setAvatarURL(cachedURL);

      const response = await fetch(
        "https://api.escuelajs.co/api/v1/files/upload",
        {
          method: "post",
          body: formData,
        }
      );

      if (response.status === 201) {
        const data = await response.json();
        setAvatarURL(data?.location);
      }
    } catch (error) {
      console.error(error);
      setAvatarURL(DefaultImage);
    }
  };
  return (
    <>
      <div className="md:w-[48%] w-full">
        <div className="border-dashed border-2 border-[#FFE3E3] rounded-2xl text-center px-8 lg:py-16 md:py-8 py-8 mt-4">
          <div className="relative flex justify-center items-center flex-col w-full">
            <img
              src={avatarURL}
              alt="Avatar"
              className="h-40 w-40 rounded-full"
            />

            <form id="form" encType="multipart/form-data">
              <div className="mt-5">
                <p className="mb-4">Choose a file or drag & drop it here</p>

                <p className="text-[#A9ACB4] mb-10">
                  JPEG, PNG, PDG and MP4 formaes, up tp 50MB
                </p>
              </div>

              <button
                type="submit"
                className="border-2 border-[#FFE3E3] px-8 py-4 rounded-md font-semibold
          "
                onClick={handleImageUpload}
              >
                Browser File
              </button>
              <input
                type="file"
                id="file"
                ref={fileUploadRef}
                onChange={uploadImageDisplay}
                hidden
              />
            </form>
          </div>
        </div>

        <div className="flex justify-between bg-[#F9F2E4] rounded-2xl px-4 lg:py-8 md:py-4 py-4 mt-10">
          <img
            src={avatarURL}
            alt="Avatar"
            className="h-20 w-20 rounded-full"
          />
          <div className="lg:pl-6 pl-2 w-full pt-3  ">
            <div className="flex justify-between w-full lg:mb-4 mb-2">
              <p className="font-semibold lg:text-[18px] md:text-[15px] text-[14px]">
                {/* Google-certificate.pdf */}
                {imageName}
              </p>
              <img
                src={deleteIcon}
                alt="delete icon"
                className="w-[14px] h-[19px]"
              />
            </div>
            <div className="lg:w-[80%] w-full lg:flex justify-between">
              <p className="lg:text-[18px] md:text-[15px] text-[15px]">
                {/* 94 KB of 94 KB{" "} */}
                {imageSize} KB
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
