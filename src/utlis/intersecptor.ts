import { store } from "../store/store";
import { setIsAuthorized } from "./../store/user/userSlice";
import http from "./../http/http";
import { getToken } from "./tokenHelper";

const ERROR_MSGs = [
	"Token is not found",
	"You are not authorized",
	"Invalid token please do re-login",
];

function setup() {
	http.interceptors.request.use(
		(config) => {
			const token = getToken();
			// @ts-ignore
			config.headers = {
				Authorization: `${token ? "Bearer " + token : ""}`,
				...config.headers,
			};
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	const { dispatch } = store;
	http.interceptors.response.use(
		(res) => {
			return res;
		},
		async (err) => {
			if (ERROR_MSGs.includes(err?.response?.data.message)) {
				dispatch(setIsAuthorized(false));
			}
			return Promise.reject(err);
		}
	);
}

export default setup;
