import http from "./http";
import { useQuery } from "@tanstack/react-query";
import { USER_ENDPOINTS } from "../utlis/apiRoutes";
import { useAppDispatch } from "../store/typedReduxHooks";
import { setIsAuthorized, updateUser } from "../store/user/userSlice";

const useGetUser = () => {
	const url = USER_ENDPOINTS.getUser;
	const dispatch = useAppDispatch();
	const getUser = async () => {
		try {
			const response = await http.get(url);
			dispatch(updateUser(response.data.users));
			dispatch(setIsAuthorized(true));
			return response.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	return useQuery({
		queryKey: [url],
		queryFn: getUser,
		retry: false,
	});
};

export default useGetUser;
