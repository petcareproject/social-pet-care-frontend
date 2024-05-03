import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import signup from "../SignUp/assets/Frame_31.png";
import CommonHeader from "../Login/CommonHeader";
import "../Style/Style.css";
import http from "../../http/http";
import { USER_API } from "../utils/ApiEndPoints";
import toast from "react-hot-toast";
import { USER_ENDPOINTS } from "../../utlis/apiRoutes";
import { setToken } from "../../utlis/tokenHelper";
import { useAppDispatch } from "../../store/typedReduxHooks";
import { setIsAuthorized, updateUser } from "../../store/user/userSlice";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const SignUpForm = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [isVisiblePass, setVisiblePass] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setIsLoading(true);
		try {
			const response = await http.post(USER_API.SIGN_UP, formData);
			setToken(response.data.token);
			const { data } = await http.get(USER_ENDPOINTS.getUser);
			dispatch(updateUser(data.users));
			dispatch(setIsAuthorized(true));
			navigate("/");
			setIsLoading(false);
			toast.success("Account created successfully");
		} catch (error) {
			setIsLoading(false);
			toast.error(error.response.data.message);
		}
	};

	const handleChange = (event: { target: { name: string; value: string } }) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const redirectToLogin = () => {
		navigate("/login");
	};

	return (
		<>
			<div className="bg-login pt-[50px] pb-[80px]">
				<div className="container mx-auto md:px-6 px-4">
					<CommonHeader />

					<div className="md:flex items-center justify-center w-full pt-12 md:pt-0">
						<div className="lg:w-[40%] md:w-[50%] w-full ">
							<h1 className="text-[34px] font-semibold">
								Welcome to the socialpet
							</h1>
							<p className="md:text-[22px] text-[20px] md:mb-5">
								of our cherished Pet loving
							</p>
							<form onSubmit={handleSubmit}>
								<div className="block">
									<label className="text-[10px] uppercase w-full text-[#666666]">
										Username
									</label>
									<input
										type="text"
										name="username"
										onChange={handleChange}
										placeholder="Username@gmail.com"
										className=" outline-none w-full bg-transparent lg:mt-4 md:mt-0 mt-2 md:mb-6 mb-4 border-black border-b-2 text-black md:pb-4 pb-2"
									/>
								</div>
								<div>
									<label className="text-[10px] uppercase w-full text-[#666666]">
										Email
									</label>
									<input
										type="text"
										name="email"
										onChange={handleChange}
										placeholder="username@gmail.com"
										className=" outline-none w-full bg-transparent lg:mt-4 md:mt-0 mt-2 md:mb-6 mb-4 border-black border-b-2 text-black md:pb-4 pb-2"
									/>
								</div>
								<div>
									<label className="text-[10px] uppercase w-full text-[#666666]">
										Password
									</label>
									<input
										type={!isVisiblePass ? "password" : "text"}
										name="password"
										onChange={handleChange}
										placeholder="***************"
										className=" outline-none w-full bg-transparent lg:mt-4 md:mt-0 mt-2 md:mb-6 mb-4 border-black border-b-2 text-black md:pb-4 pb-2"
									/>
									<button
										type="button"
										className="absolute ml-[-30px] mt-[14px]"
										onClick={() => setVisiblePass(!isVisiblePass)}>
										{isVisiblePass ? (
											<IoEyeOutline className="w-[30px] h-[22px]" />
										) : (
											<IoEyeOffOutline className="w-[30px] h-[22px]" />
										)}
									</button>
								</div>
								<p className="lg:mt-4 md:mt-0 mt-4 text-[13px]">
									By creating an account, you agree to the{" "}
									<a className="underline mr-1"> Terms of use</a>
									and
									<a className="underline ml-1"> Privacy Policy</a>.
								</p>
								<Button
									disabled={isLoading}
									className="w-full my-5 text-[16px]"
									variant={{ theme: "dark", thickness: "thick" }}>
									{isLoading ? "...Wait" : "Continue"}
								</Button>
							</form>
							<div className="justify-center flex mt-2 md:text-[22px] text-[15px]">
								<h6 className=" mr-[4px]">Already have account?</h6>
								<a
									className="text-[#FF553E] font-bold uppercase cursor-pointer"
									onClick={redirectToLogin}>
									Login
								</a>
							</div>
						</div>

						<div className="md:w-[48%] hidden md:flex justify-center">
							<img src={signup} alt=" Login image" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUpForm;
