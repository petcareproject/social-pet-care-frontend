import useLogout from "../../http/useLogOut";
// import logoutimg from "../UserProfile/assets/popup-image.png";
// import crossicon from "../UserProfile/assets/crossicon.png";
import logoutimg from "../UserProfile/assets/popup-img.png";
import crossicon from "../UserProfile/assets/crossimg.png";
import { IoWarning } from "react-icons/io5";
import useDeletePet from "../../http/useDeletePet";

const DeleteWarningModal = ({ setIsModalOpen, petId, featcPets }) => {
	const { mutate, isPending } = useDeletePet(featcPets, setIsModalOpen);
	return (
		<div className="absolute flex items-center justify-center z-20 inset-0">
			<div className="p-4 sm:p-10 bg-gray-50 rounded-md  w-[300px] md:w-[500px] text-center overflow-y-auto">
				<div className="flex justify-end">
					<img
						src={crossicon}
						alt="cross icon"
						onClick={() => setIsModalOpen(false)}
					/>
				</div>
				<IoWarning fill="red" size={50} className="m-auto my-3" />
				<h3 className="mb-2 sm:text-2xl text-lg font-bold text-gray-800">
					Sure you want to Delete pet information from your profile?
				</h3>

				<div className="mt-6 flex justify-center gap-x-4">
					<button
						onClick={() => setIsModalOpen(false)}
						type="button"
						className="sm:py-2.5 sm:px-10 py-1.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-[#FF553E] font-semibold bg-white text-gray-700 hover:bg-[#FF553E] hover:text-white focus:outline-none focus:ring-2 transition-all text-sm">
						No,cancel
					</button>
					<button
						disabled={isPending}
						onClick={() => mutate(petId)}
						className="sm:py-2.5 sm:px-10 py-1.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-red-500 text-white  shadow-sm align-middle transition-all text-sm">
						Yes, Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteWarningModal;
