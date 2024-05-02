import searchicon from "./assets/search.png";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("kkk");
    navigate("/search");
  };

  return (
    <div>
      <div className="hidden md:block mb-4 container mx-auto 2xl:w-[1110px] xl:w-[930px] lg:w-[730px] md:w-[550px] backdrop-blur-md shadow-2xl rounded-md 2xl:mt-[70px] lg:mt-[30px]">
        <div className="relative flex lg:py-6 md:py-2 py-6 md:mt-6">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 ">
            <img
              src={searchicon}
              alt="search-icon"
              className="lg:pl-4 md:pl-2"
            />
          </button>

          <input
            type="text"
            placeholder="Search nearby pets around you...."
            className="w-full text-black focus:outline-none lg:pl-12 md:pl-8 lg:text-lg md:text-md bg-transparent"
          />
          <Button
            variant={{ theme: "dark", thickness: "thick" }}
            className="lg:mr-[30px] md:mr-[10px] md:px-8 md:py-4"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
