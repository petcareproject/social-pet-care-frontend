import http from "./http";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USER_ENDPOINTS } from "../utlis/apiRoutes";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
	const url = USER_ENDPOINTS.updateProfile;
	const getUserurl = USER_ENDPOINTS.getUser;
	const queryClient = useQueryClient();

	const updateProfile = async (body) => {
		try {
			const response = await http.put(url, body, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			toast.success(response.data.message);
			queryClient.invalidateQueries({ queryKey: [getUserurl], type: "all" });
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	return useMutation({
		mutationKey: [url],
		mutationFn: (body) => updateProfile(body),
	});
};

export default useUpdateProfile;
