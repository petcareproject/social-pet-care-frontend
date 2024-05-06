import mainImage from "./assets/main_image.png";
import CommonData from "../CommonData";
import Button from "../ui/Button";

const SocialGatheringSection = () => {
	return (
		<>
			{" "}
			<div className="container mx-auto md:px-6 px-4 relative my-28 ">
				<div className="relative">
					<img src={mainImage} alt="main_image" className="w-full" />
					<div className="md:absolute block xl:top-[20%] lg:top-[15%] md:top-[10%] md:left-[50%] md:w-[50%] h-full items-center justify-end">
						<div className="w-[100%]">
							<CommonData
								heading="Find a dog owner Or social gathering."
								description="Place your trust in We Love Pets, an award-winning dog walking and pet care"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SocialGatheringSection;
