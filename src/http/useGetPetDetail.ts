import http from "./http";
import { useQuery } from "@tanstack/react-query";
import { PET_ENDPOINTS } from "../utlis/apiRoutes";
import { pet } from "../utlis/types/pets.type";

export const getPet = async (url, petId) => {
	try {
		const response = await http.get<{ data: pet; message: string }>(
			url + petId
		);
		return response.data;
	} catch (error) {
		throw new Error(error.message);
	}
};

const useGetPetDetail = (petId) => {
	const url = PET_ENDPOINTS.getPet;

	return useQuery({
		queryKey: [url],
		queryFn: () => getPet(url, petId),
		staleTime: Infinity,
	});
};

export default useGetPetDetail;
