import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import useGetUser from "../http/useGetUser";
import { useAppSelector } from "../store/typedReduxHooks";
import Loader from "./utils/Loader";

const Auth = () => {
	const navigate = useNavigate();
	const { isLoading } = useGetUser();
	const user = useAppSelector((state) => state.user.user);
	console.log(user);

	if (isLoading) {
		return (
			<div className="h-[100dvh] w-[100dvw] relative">
				<Loader />
			</div>
		);
	}
	if (!user) {
		navigate("/login");
	}

	return <Outlet />;
};

export default Auth;
