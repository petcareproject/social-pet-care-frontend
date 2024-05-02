import http from "./http";
import { useMutation } from "@tanstack/react-query";
import { USER_ENDPOINTS } from "../utlis/apiRoutes";
import { useAppDispatch } from "../store/typedReduxHooks";
import { removeUser } from "../store/user/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { deleteToken } from "../utlis/tokenHelper";

const useChangePassword = () => {
	const url = USER_ENDPOINTS.changePassword;
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const changePassword = async (body) => {
		try {
			const response = await http.post(url, body);
			dispatch(removeUser());
			deleteToken();
			navigate("/login");
			toast.success(response.data.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	return useMutation({
		mutationKey: [url],
		mutationFn: (body) => changePassword(body),
	});
};

export default useChangePassword;
