import PetOwnerCard from "./PetOwnerCard";

const DetailRight = () => {
  return (
    <div className="xl:w-[25%] lg:w-[25%] md:w-[35%] mt-14">
      <div className="bg-[#FA441D] xl:px-10 lg:px-4 p-6 xl:py-8 lg:py-4 rounded-xl">
        <div className="mb-4">
          <h1 className="xl:text-[24px] lg:text-[20px] text-[24px] text-white mb-2">
            Characteristics
          </h1>
          <ul className="list-image-[url(dot)]">
            <li className="text-[16px]  lg:text-[15px] text-white mb-1">
              House trained
            </li>
            <li className="text-[16px]  lg:text-[15px] text-white mb-1">
              Declawed
            </li>
            <li className="text-[16px]  lg:text-[15px] text-white mb-1">
              Minimum Maintenance
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h1 className="xl:text-[24px] lg:text-[20px]  text-[24px] text-white mb-2">
            Size
          </h1>
          <ul className="">
            <li className="text-[16px]  lg:text-[15px] text-white">Small</li>
          </ul>
        </div>

        <div className="">
          <h1 className="xl:text-[24px] lg:text-[20px]  text-[24px] text-white mb-2">
            Compatible With
          </h1>
          <ul className="">
            <li className="text-[16px]  lg:text-[15px] text-white mb-1">
              Cats
            </li>
            <li className="text-[16px]  lg:text-[15px] text-white mb-1">
              Dogs
            </li>
            <li className="text-[16px]  lg:text-[15px] text-white mb-1">
              children
            </li>
          </ul>
        </div>
      </div>

      <PetOwnerCard />
    </div>
  );
};

export default DetailRight;
