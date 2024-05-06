import useGetPetDetail from "../../http/useGetPetDetail";
import { pet } from "../../utlis/types/pets.type";
import HeroSection from "../NearbyPet/HeroSection";
import image1 from "./assets/div.banner-img-1.png";
import image2 from "./assets/div.banner-img-2.png";

const BannerSection = ({ petId }) => {
	const { data } = useGetPetDetail(petId);

	const petDetaill: pet = data.data;

	return (
		<div>
			<HeroSection
				title={petDetaill.petBreeds}
				link1="Home"
				link2={petDetaill.petBreeds}
				image1={image1}
				image2={image2}
			/>
		</div>
	);
};

export default BannerSection;
