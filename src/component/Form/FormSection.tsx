import { useEffect, useState } from "react";
import FooterSection from "../Footer/FooterSection";
import LogoHeader from "../HeroSection/LogoHeader";
import FormLeftSection from "./FormLeftSection";
import FormRightSection from "./FormRightSection";
import { useParams } from "react-router-dom";
import { PET_ENDPOINTS } from "../../utlis/apiRoutes";
import { getPet } from "../../http/useGetPetDetail";
import { pet } from "../../utlis/types/pets.type";
import Loader from "../utils/Loader";

const FormSection = () => {
	const [petImage, setPetImage] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const [petData, setPetData] = useState<pet>();

	const { petId } = useParams();
	const fetchPetData = async () => {
		try {
			setIsLoading(true);

			const url = PET_ENDPOINTS.getPet;

			const petData = await getPet(url, petId);

			setPetData(petData.data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (!petId) {
			setPetData(undefined);
			return;
		} else {
			fetchPetData();
		}
	}, [petId]);

	if (isLoading)
		return (
			<div className="h-[100dvh] w-[100dvw] relative">
				<Loader />
			</div>
		);

	return (
		<>
			<div className="bg-form">
				<LogoHeader />
				<div className="my-20 container mx-auto md:px-6 px-4">
					<h1 className="text-center text-[40px] font-semibold mb-10 mt-5 md:mt-0">
						{!petData ? "List your pets" : `Edit ${petData.petName}'s profile`}
					</h1>
					<div className="md:flex justify-between mt-12 pb-4">
						<FormLeftSection
							petImage={petImage}
							setPetImage={setPetImage}
							petData={petData}
						/>

						<FormRightSection
							petImage={petImage}
							setPetImage={setPetImage}
							petData={petData}
						/>
					</div>
				</div>
			</div>
			<FooterSection />
		</>
	);
};

export default FormSection;
