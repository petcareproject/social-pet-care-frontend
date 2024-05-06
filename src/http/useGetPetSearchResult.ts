import http from "./http";
import { useQuery } from "@tanstack/react-query";
import { PET_ENDPOINTS, USER_ENDPOINTS } from "../utlis/apiRoutes";
import { useAppDispatch } from "../store/typedReduxHooks";
import { setIsAuthorized, updateUser } from "../store/user/userSlice";
import { PetSearchResult } from "../utlis/types/pets.type";

const useGetPetSearchResult = (searchParam) => {
	const url = PET_ENDPOINTS.petList;
	const getPets = async () => {
		try {
			const response = await http.get<PetSearchResult>(
				url + "?" + "search=" + searchParam
			);
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	return useQuery({
		queryKey: [url],
		queryFn: getPets,
		staleTime: Infinity,
		enabled: false,
	});
};

export default useGetPetSearchResult;
