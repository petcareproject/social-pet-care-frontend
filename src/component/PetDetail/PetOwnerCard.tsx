import petowner from "./assets/Figure.png";
import paw from "./assets/paw.png";
import chat from "./assets/chat.png";
const PetOwnerCard = () => {
  return (
    <div className="shadow-lg bg-white xl:mt-10 lg:mt-6 my-10 py-10 px-5 rounded-2xl">
      <div className="flex xl:mb-10 mb-8 lg:mb-6">
        <img src={paw} alt="paw" className="w-[17px] h-[18px] mr-4 mt-2" />
        <h1 className="text-[23px]">Pet Owner</h1>
      </div>
      <div className="text-center w-full flex flex-col items-center">
        <img src={petowner} alt="Pet Owner" className=" flex justify-center " />
        <h1 className="text-[23px] xl:my-6 my-4 lg:my-2">Reenie Beanie</h1>
        <p className="mb-2 text-[#818181]">220 street way</p>

        <button
          type="button"
          className="rounded-full xl:mt-4 lg:mt-2 lg:ml-4 bg-[#FF553E] px-16 xl:py-4 lg:py-2 py-3 text-white font-semibold flex "
        >
          <img src={chat} alt="chat icon" className="mr-2" />
          <p>Chat</p>
        </button>
      </div>
    </div>
  );
};

export default PetOwnerCard;
