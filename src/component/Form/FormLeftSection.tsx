import deleteIcon from "./assets/delete.png";
import rightIcon from "./assets/tick-circle.png";
import { useEffect, useRef, useState } from "react";
import DefaultImage from "./assets/cloud-add.svg";
import { pet } from "../../utlis/types/pets.type";

function b64toBlob(b64Data, contentType) {
	contentType = contentType || "";
	let sliceSize = 512;

	let byteCharacters = atob(b64Data);
	let byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		let slice = byteCharacters.slice(offset, offset + sliceSize);

		let byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		let byteArray = new Uint8Array(byteNumbers);

		byteArrays.push(byteArray);
	}

	let blob = new Blob(byteArrays, { type: contentType });
	return blob;
}

const FormLeftSection = ({
	petImage,
	setPetImage,
	petData,
}: {
	petImage: any;
	setPetImage: React.Dispatch<React.SetStateAction<any>>;
	petData?: pet;
}) => {
	const [imageBuffer, setImageBuffer] = useState([]);
	const [imageName, setImageName] = useState([]);
	const [imageSize, setImageSize] = useState([]);

	useEffect(() => {
		let imageNames = [];
		let petImages = [];
		let imageSizes = [];

		if (petData) {
			petData.petProfile.forEach((val, i) => {
				const realData = val.split("base64,")[1];

				let blob = b64toBlob(realData, "image/png");

				petImages.push(blob);
				imageNames.push(petData.petName + " image " + (i + 1));
				imageSizes.push((blob.size / 1024).toFixed(2));
			});
			setImageBuffer(petData.petProfile);
		}

		setImageName(imageNames);
		setImageSize(imageSizes);
		setPetImage(petImages);
	}, [petData]);

	useEffect(() => {
		if (petImage.length === 0) {
			setImageBuffer([]);
			setImageName([]);
			setImageSize([]);
		}
	}, [petImage]);

	const fileUploadRef = useRef();

	const handleImageUpload = (event) => {
		event.preventDefault();
		fileUploadRef.current.click();
	};

	const uploadImageDisplay = async () => {
		try {
			const uploadedFiles = Array.from(fileUploadRef.current.files);

			setPetImage([...petImage, ...uploadedFiles]);

			console.log(petImage, uploadedFiles);

			const imageBuffers = [];
			const imageNames = [];
			const imageSizes = [];
			const petImages = [];
			uploadedFiles.forEach((file) => {
				petImages.push(file);
				imageNames.push(file.name);
				imageSizes.push((file.size / 1024).toFixed(2));
				imageBuffers.push(URL.createObjectURL(file));
			});

			setImageBuffer([...imageBuffer, ...imageBuffers]);
			setImageName([...imageName, ...imageNames]);
			setImageSize([...imageSize, ...imageSizes]);
			setPetImage([...petImage, ...petImages]);
		} catch (error) {
			console.log(error);

			setImageBuffer([]);
			setImageName([]);
			setImageSize([]);
		}
	};
	const handleDeleteImage = (index: number) => {
		const filtredImageBufferImg = imageBuffer.filter((val, i) => {
			if (i !== index) return val;
		});
		const filtredImageName = imageName.filter((val, i) => {
			if (i !== index) return val;
		});
		const filtredImageSize = imageSize.filter((val, i) => {
			if (i !== index) return val;
		});

		const filtredPetImage = petImage.filter((val, i) => {
			if (i !== index) return val;
		});
		setImageBuffer(filtredImageBufferImg);
		setImageName(filtredImageName);
		setImageSize(filtredImageSize);
		setPetImage(filtredPetImage);
	};

	return (
		<>
			<div className="md:w-[48%] w-full">
				<div className="border-dashed border-2 border-[#FFE3E3] rounded-2xl text-center px-8 lg:py-16 md:py-8 py-8 mt-4">
					<div className="relative flex justify-center items-center flex-col w-full ">
						<img
							src={DefaultImage}
							alt="Avatar"
							className="h-40 w-40 rounded-full"
						/>

						<form id="form" encType="multipart/form-data">
							<div className="mt-5">
								<p className="mb-4">Choose a file or drag & drop it here</p>

								<p className="text-[#A9ACB4] mb-10">
									JPEG, PNG, PDG and MP4 formaes, up tp 50MB
								</p>
							</div>

							<button
								type="submit"
								className="border-2 border-[#FFE3E3] px-8 py-4 rounded-md font-semibold
          "
								onClick={handleImageUpload}>
								Browser File
							</button>
							<input
								type="file"
								id="file"
								multiple
								ref={fileUploadRef}
								onChange={uploadImageDisplay}
								hidden
							/>
						</form>
					</div>
				</div>

				{imageName.length !== 0 &&
					imageName.map((_, i) => {
						return (
							<div className="flex justify-between bg-[#F9F2E4] rounded-2xl px-4 lg:py-8 md:py-4 py-4 mt-10">
								<img
									src={imageBuffer[i]}
									alt="Avatar"
									className="h-20 w-20 rounded-full"
								/>
								<div className="lg:pl-6 pl-2 w-full pt-3  ">
									<div className="flex justify-between w-full lg:mb-4 mb-2">
										<p className="font-semibold lg:text-[18px] md:text-[15px] text-[14px]">
											{imageName[i]}
										</p>
										<img
											src={deleteIcon}
											alt="delete icon"
											onClick={() => handleDeleteImage(i)}
											className="w-[14px] h-[19px] cursor-pointer"
										/>
									</div>
									<div className="lg:w-[80%] w-full lg:flex justify-between">
										<p className="lg:text-[18px] md:text-[15px] text-[15px]">
											{/* 94 KB of 94 KB{" "} */}
											{imageSize[i]} KB
										</p>

										<div className="flex md:w-[50%] lg:w-[28%] w-[28%] justify-between">
											<img src={rightIcon} alt="right icon" />
											<p className="lg:text-[18px] md:text-[15px] text-[15px] ml-2">
												Completed
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</div>
		</>
	);
};

export default FormLeftSection;
