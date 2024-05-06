import http from "./http";
import { useMutation } from "@tanstack/react-query";
import { USER_ENDPOINTS } from "../utlis/apiRoutes";
import { useAppDispatch } from "../store/typedReduxHooks";
import { removeUser } from "../store/user/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../utlis/tokenHelper";

const useDeletePet = (featchPets, setIsModalOpen) => {
	const url = USER_ENDPOINTS.deletePet;

	const deletePet = async (petId) => {
		try {
			const response = await http.delete(url + petId);
			toast.success(response.data.message);
			featchPets();
			setIsModalOpen(undefined);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	return useMutation({
		mutationKey: [url],
		mutationFn: (petId) => deletePet(petId),
	});
};

export default useDeletePet;
