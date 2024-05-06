import image1 from "./assets/Item → pets.jpg.png";
// import img1 from "./assets/pets1.png";
import img2 from "./assets/pet2.png";
import img3 from "./assets/pet3.png";
import location from "./assets/location.png";
import email from "./assets/email.png";
import call from "./assets/call.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import useGetPetDetail from "../../http/useGetPetDetail";
import { pet } from "../../utlis/types/pets.type";

const images = [
	{
		original: image1,
		// thumbnail: img1,
	},
	{
		original: image1,
		thumbnail: img2,
	},
	{
		original: image1,
		thumbnail: img3,
	},
];

const DetailLeft = ({ petId }) => {
	const { data } = useGetPetDetail(petId);

	const petDetail: pet = data.data;

	const sliderImgae = petDetail.petProfile.map((val) => {
		return { original: val, thumbnail: val };
	});

	return (
		<>
			<div className="xl:w-[65%] lg:w-[70%] md:w-[60%] w-full ">
				<h1 className="text-[30px] font-semibold">{petDetail.petBreeds}</h1>

				<div className="md:mt-10 mt-16 [&>img]:h-40! [&>img]:w-40!">
					<ImageGallery items={sliderImgae} autoPlay={true} />
				</div>

				<div className="mb-6 2xl:w-[85%] mt-16">
					<h1 className="text-[23px] mb-8">About me</h1>
					<p className="text-[16px] mb-6 leading-8">{petDetail.aboutPets}</p>

					<h1 className="text-[23px] mb-4">Want to Adopt me?</h1>
					<p className="text-[16px] mb-2 leading-8">
						Quisque mauris nec this is to make this text long as good ante
						bibendum, at pretium diam vehicula. Morbi non metus eu libero
						interdum tristique ut vel leo
					</p>
				</div>

				<div className="lg:flex block lg:justify-between justify-center w-full my-20 bg-[#FEF7E7] px-4 py-6 rounded-xl">
					<div className="lg:flex block lg:w-[33.33%] w-full lg:border-r-2 mb-6 md:mb-0">
						<div className="xl:mr-2 lg:mr-1 2xl:w-[10%] lg:w-[15%] flex justify-center">
							<img
								src={location}
								alt="location"
								className="mb-1 w-[20px] h-[21px]"
							/>
						</div>
						<div className="2xl:w-[80%] lg:w-[90%] lg:text-left w-full text-center">
							<h6 className="font-semibold text-[17px]">
								{petDetail.location}
							</h6>
							<p className="text-[#444444] xl:text-[16px] lg:text-[15px] 2xl:mr-16 mr-0 md:mt-2 mt-1">
								{petDetail.address}
							</p>
						</div>
					</div>

					<div className="lg:flex lg:w-[33.33%] w-full lg:border-r-2 lg:justify-center mb-6 md:mb-0">
						<div className="mr-2 flex justify-center">
							<img src={email} alt="location" className="w-[21px] h-[21px]" />
						</div>
						<div className="text-center">
							<h6 className="font-semibold text-[17px]">
								{petDetail.userEmail}
							</h6>
						</div>
					</div>

					<div className="lg:flex lg:w-[33.33%] w-full justify-center mb-6 md:mb-0">
						<div className="mr-2 flex justify-center">
							<img src={call} alt="location" className="w-[21px] h-[21px]" />
						</div>
						<div className="text-center">
							<h6 className="font-semibold text-[17px]">
								{petDetail.userPhone}
							</h6>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailLeft;
