import search from "./assets/search.png";
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
import { useEffect, useState } from "react";

import pawimage from "./assets/footprint-shape_svgrepo.com.png";
import searchicon from "./assets/search.png";
import useGetPetSearchResult from "../../http/useGetPetSearchResult";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../utils/Loader";
import { Button } from "react-bootstrap";

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
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const { state } = useLocation();

	const [searchInput, setSearchInput] = useState(
		state?.searchVal ? state.searchVal : ""
	);

	const {
		refetch,
		isFetching,
		error,
		data: petsData,
	} = useGetPetSearchResult(searchInput);

	useEffect(() => {
		refetch();
	}, []);
	const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		refetch();
	};

	const handlePetDetailNavigate = (petId) => {
		navigate(`/detail/${petId}`);
	};

	if (isFetching || !petsData)
		return (
			<div className="h-[70dvh] w-[100dvw] relative">
				<Loader />
			</div>
		);

	return (
		<>
			<div className="nearbybg-image pt-[100px]">
				<div className="container w-[95%] mx-auto">
					<div className="lg:flex w-full block justify-center md:px-10">
						<form
							onSubmit={handleSearch}
							className="relative flex  w-[50ch] py-3   md:mt-6 outline outline-2 outline-[#FF553E] rounded-full">
							<input
								onChange={(e) => setSearchInput(e.target.value)}
								type="text"
								value={searchInput}
								placeholder="Search ...."
								className="w-full text-black  focus:outline-none pl-4 pr-9     lg:text-lg md:text-md bg-transparent placeholder:opacity-40"
							/>
							<button
								type="submit"
								className="absolute right-0 top-1/2 -translate-y-1/2 ">
								<img
									src={searchicon}
									alt="search-icon"
									className="lg:pr-4 md:pr-2"
								/>
							</button>
						</form>
					</div>

					{/* ---------------------------------- */}

					<div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-20 justify-center">
						{petsData.data.length === 0 ? (
							<h1 className="text-[24px] flex justify-center w-full xl:col-span-4 lg:col-span-3 md:col-span-2  font-semibold">
								{"No pets found!"}
							</h1>
						) : (
							petsData.data.map((item, index) => (
								<div className="relative h-full flex flex-col" key={item._id}>
									<img
										src={item.petProfile[0]}
										alt=""
										className="px-3 h-48 object-cover"
									/>
									<div className="p-6 pb-4 shadow-lg bg-white rounded-b-lg flex-1">
										<h1 className="text-[24px] font-semibold">
											{item.petCategory}
										</h1>
										<div className="flex my-2">
											<img
												src={home}
												alt="home"
												className="w-[15px] h-[16px]"
											/>
											<p className="text-[16px] text-[#818181] ml-2">
												{item.location}
											</p>
										</div>
										<div className="flex mt-1">
											<h6 className="text-[16px] font-bold">Age</h6>
											<p className="text-[16px] ml-2">{item.age}</p>
										</div>
										<div className="flex justify-between">
											<div className="flex my-2">
												<h6 className="text-[16px] font-bold">Breed:</h6>
												<p className="text-[16px] ml-2">{item.petBreeds}</p>
											</div>
										</div>
									</div>

									<div className="absolute inset-0 px-3 bg-[#FA441D] rounded-lg opacity-0 hover:opacity-90 transition-opacity flex items-center justify-center">
										<div className="text-center ">
											<div className="flex justify-center">
												<img src={pawimage} alt="paw image" />
											</div>
											<button onClick={() => handlePetDetailNavigate(item._id)}>
												<h1 className="text-white z-10 text-[20px]">
													View Profile
												</h1>
											</button>
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardSection;
