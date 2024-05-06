import searchicon from "./assets/search.png";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const SearchBar = () => {
	const navigate = useNavigate();
	const [searchInput, setSearchInput] = useState("");

	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		navigate("/search", { state: { searchVal: searchInput } });
	};

	return (
		<div>
			<div className="hidden md:block mb-4 container mx-auto 2xl:w-[1110px] xl:w-[930px] lg:w-[730px] md:w-[550px] backdrop-blur-md shadow-2xl rounded-md 2xl:mt-[70px] lg:mt-[30px]">
				<form
					onSubmit={handleSearch}
					className="relative flex lg:py-6 md:py-2 py-6 md:mt-6">
					<button
						type="button"
						className="absolute left-0 top-1/2 -translate-y-1/2 ">
						<img
							src={searchicon}
							alt="search-icon"
							className="lg:pl-4 md:pl-2"
						/>
					</button>

					<input
						onChange={(e) => setSearchInput(e.target.value)}
						type="text"
						placeholder="Search nearby pets around you...."
						className="w-full text-black focus:outline-none lg:pl-12 md:pl-8 lg:text-lg md:text-md bg-transparent"
					/>
					<Button
						type="submit"
						variant={{ theme: "dark", thickness: "thick" }}
						className="lg:mr-[30px] md:mr-[10px] md:px-8 md:py-4">
						Search
					</Button>
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
