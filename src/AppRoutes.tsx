import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./component/HomePage";
import Login from "./component/Login/Login";
import ForgetPassword from "./component/Login/ForgetPassword";
import ResetPassword from "./component/Login/ResetPassword";
import ChangePassword from "./component/ChangePassword/ChangePassword";
import Otp from "./component/Login/Otp";
import SignUpForm from "./component/SignUp/SignUpForm";
import FormSection from "./component/Form/FormSection";
import Nearby from "./component/NearbyPet/Nearby";
import PetDetail from "./component/PetDetail/PetDetail";
import AboutUs from "./component/AboutUs/AboutUs";
import PasswordChangedSuccessPage from "./component/Login/ChangePassword";
import Contact from "./component/ContactUs/Contact";
import UserProfile from "./component/UserProfile/UserProfile";
import useGetUser from "./http/useGetUser";
import { useAppSelector } from "./store/typedReduxHooks";
import Loader from "./component/utils/Loader";

const AppRoutes = () => {
	const navigate = useNavigate();
	const { isLoading } = useGetUser();
	const path = useLocation();
	const authPathArray = [
		"/otp",
		"/form",
		"/search",
		"/detail",
		"/user_profile",
		"/change_password",
	];
	const user = useAppSelector((state) => state.user.user);

	if (isLoading) {
		return (
			<div className="h-[100dvh] w-[100dvw] relative">
				<Loader />
			</div>
		);
	}

	if (!user && authPathArray.includes(path.pathname)) {
		navigate("/login");
		return;
	}
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="/otp" element={<Otp />}></Route>
			<Route path="/petedit/:petId" element={<FormSection />}></Route>
			<Route path="/form" element={<FormSection />}></Route>
			<Route path="/search" element={<Nearby />}></Route>
			<Route path="/detail/:petId" element={<PetDetail />}></Route>
			<Route path="/user_profile" element={<UserProfile />}></Route>
			<Route path="/change_password" element={<ChangePassword />}></Route>
			<Route
				path="/passwordchanged"
				element={<PasswordChangedSuccessPage />}></Route>
			<Route path="/about" element={<AboutUs />}></Route>
			<Route path="/contact" element={<Contact />}></Route>
			<Route path="/signup" element={<SignUpForm />} />
			<Route path="/login" element={<Login />}></Route>
			<Route path="/forgetpassword" element={<ForgetPassword />}></Route>
			<Route path="/resetpassword" element={<ResetPassword />}></Route>;
		</Routes>
	);
};

export default AppRoutes;
