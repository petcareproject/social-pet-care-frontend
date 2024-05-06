import { useNavigate, useParams } from "react-router-dom";
import FooterSection from "../Footer/FooterSection";
import LogoHeader from "../HeroSection/LogoHeader";
import Navbar from "../HeroSection/Navbar";
import BannerSection from "./BannerSection";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import "../Style/Style.css";
import useGetPetDetail from "../../http/useGetPetDetail";
import Loader from "../utils/Loader";

const PetDetail = () => {
	const navigate = useNavigate();
	const { petId } = useParams();
	const { isLoading, isError } = useGetPetDetail(petId);

	if (isError) {
		navigate("/search");
	}

	if (isLoading)
		return (
			<div className="h-[100dvh] w-[100dvw] relative">
				<Loader />
			</div>
		);

	return (
		<>
			<div className="bg-common">
				<LogoHeader />
				<div className="container mx-auto md:px-6 px-4">
					<BannerSection petId={petId} />
				</div>
			</div>
			<div className="nearbybg-image ">
				<div className="w-full container mx-auto md:pt-16 pt-20 md:px-6 px-4 md:flex block justify-between">
					<DetailLeft petId={petId} />
					<DetailRight petId={petId} />
				</div>
			</div>
			<div>
				<FooterSection />
			</div>
		</>
	);
};

export default PetDetail;
