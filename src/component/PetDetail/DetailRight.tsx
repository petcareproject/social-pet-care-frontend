import useGetPetDetail from "../../http/useGetPetDetail";
import { pet } from "../../utlis/types/pets.type";
import PetOwnerCard from "./PetOwnerCard";

const DetailRight = ({ petId }) => {
	const { data } = useGetPetDetail(petId);
	const petDetail: pet = data.data;

	return (
		<div className="xl:w-[25%] lg:w-[25%] md:w-[35%] mt-14">
			<div className="bg-[#FA441D] xl:px-10 lg:px-4 p-6 xl:py-8 lg:py-4 rounded-xl">
				<div className="mb-4">
					<h1 className="xl:text-[24px] lg:text-[20px] text-[24px] text-white mb-2">
						Gender
					</h1>
					<ul className="list-image-[url(dot)]">
						<li className="text-[16px]  lg:text-[15px] text-white mb-1">
							{petDetail.gender}
						</li>
					</ul>
				</div>

				<div className="mb-4">
					<h1 className="xl:text-[24px] lg:text-[20px]  text-[24px] text-white mb-2">
						Age
					</h1>
					<ul className="">
						<li className="text-[16px]  lg:text-[15px] text-white">
							{petDetail.age}
						</li>
					</ul>
				</div>

				<div className="">
					<h1 className="xl:text-[24px] lg:text-[20px]  text-[24px] text-white mb-2">
						Date of birth
					</h1>
					<ul className="">
						<li className="text-[16px]  lg:text-[15px] text-white mb-1">
							{petDetail.dob.split("T")[0]}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DetailRight;
