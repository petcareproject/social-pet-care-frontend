// import LoginSection from "./LoginSection";
// import "../Style/Style.css";
// import Button from "../ui/Button";
// import login from "./assets/login.png";
// import { useNavigate } from "react-router-dom";
// import CommonHeader from "./CommonHeader";
// import { useState } from "react";

// const ForgetPassword = () => {
//   const navigate = useNavigate();
//   const redirectToSignup = () => {
//     navigate("/signup");
//   };

//   return (
//     <>
//       <div className="bg-login pt-[50px] pb-[80px]">
//         <div className="container mx-auto md:px-6 px-4">
//           <CommonHeader />

//           <div className="md:flex items-center justify-center mt-10  w-full">
//             <div className="md:w-[48%] hidden md:flex justify-center">
//               <img src={login} alt=" Login image" />
//             </div>
//             <div className="lg:w-[40%] md:w-[50%] w-full pt-10 md:pt-0">
//               <LoginSection
//                 heading="Forget Password"
//                 text="Enter your email to reset password"
//                 label1="username or email"
//                 placeholder1="denchikk1974@mail.com"
//               />
//               <Button
//                 variant={{ theme: "dark", thickness: "thick" }}
//                 className="md:w-[90%] w-full my-5 text-[16px] font-bold"
//               >
//                 Send Email
//               </Button>
//               <div className="flex md:w-[90%] w-full justify-center">
//                 <p className="mr-[4px] md:text-[22px] text-[15px]">
//                   Don't have a account?
//                 </p>
//                 <a
//                   onClick={redirectToSignup}
//                   className="text-[#FF553E] md:text-[22px] text-[15px] font-bold uppercase cursor-pointer"
//                 >
//                   signup
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ForgetPassword;

// --------------------------------------------------------------------------------

import LoginSection from "./LoginSection";
import "../Style/Style.css";
import Button from "../ui/Button";
import login from "./assets/login.png";
import { useNavigate } from "react-router-dom";
import CommonHeader from "./CommonHeader";
import { useState } from "react";
import { toast } from "react-hot-toast";
import http from "../../http/http";
import { USER_API } from "../utils/ApiEndPoints";
import { setIsAuthorized, updateUser } from "../../store/user/userSlice";
import { setToken } from "../../utlis/tokenHelper";
import { USER_ENDPOINTS } from "../../utlis/apiRoutes";
import { useAppDispatch } from "../../store/typedReduxHooks";

const ForgetPassword = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const [formData, setFormData] = useState({ email: "" });

	const dispatch = useAppDispatch();

	const redirectToSignup = () => {
		navigate("/signup");
	};

	const handleChange = (event: { target: { value: string } }) => {
		const { value } = event.target;

		setFormData({ email: value });
	};

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setIsLoading(true);
		setError(undefined);
		if (!formData.email) {
			toast.error("Please enter a valid email address.");
			return;
		}

		try {
			const { data } = await http.post(USER_API.Forget_Password, formData);
			toast.success(data.message);
			navigate("/login");
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			toast.error(error.response.data.message);
		}
		setFormData({ email: "" });
	};

	return (
		<>
			<div className="bg-login pt-[50px] pb-[80px]">
				<div className="container mx-auto md:px-6 px-4">
					<CommonHeader />

					{/* <div className="md:flex justify-between md:mt-40 mt-10 w-full"> */}
					<div className="md:flex items-center justify-center mt-10  w-full">
						<div className="md:w-[48%] hidden md:flex justify-center">
							<img src={login} alt=" Login image" />
						</div>
						<div className="lg:w-[40%] md:w-[50%] w-full pt-10 md:pt-0">
							<form onSubmit={handleSubmit}>
								<LoginSection
									heading="Forget Password"
									text="Enter your email to reset password"
									label1="username or email"
									placeholder1="denchikk1974@mail.com"
									handleChange={handleChange}
									formData={formData}
								/>
								{/* <Button
                  variant={{ theme: "dark", thickness: "thick" }}
                  className="md:w-[90%] w-full my-5 text-[16px] font-bold"
                >
                  Send Email
                </Button> */}
								<Button
									disabled={isLoading}
									className="md:w-[90%] w-full my-5 text-[16px]"
									variant={{ theme: "dark", thickness: "thick" }}>
									{isLoading ? "...Wait" : "Send Email"}
								</Button>
							</form>
							<div className="flex md:w-[90%] w-full justify-center">
								<p className="mr-[4px] md:text-[22px] text-[15px]">
									Don't have a account?
								</p>
								<a
									onClick={redirectToSignup}
									className="text-[#FF553E] md:text-[22px] text-[15px] font-bold uppercase cursor-pointer">
									signup
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ForgetPassword;
