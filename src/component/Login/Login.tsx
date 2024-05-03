import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import LoginSection from "./LoginSection";
import login from "./assets/login.png";
import CommonHeader from "./CommonHeader";
import "../Style/Style.css";
import { useState } from "react";
import http from "../../http/http";
import { USER_API } from "../utils/ApiEndPoints";
import { USER_ENDPOINTS } from "../../utlis/apiRoutes";
import { useAppDispatch } from "../../store/typedReduxHooks";
import { setIsAuthorized, updateUser } from "../../store/user/userSlice";
import { setToken } from "../../utlis/tokenHelper";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    console.log("name", name);

    if (name === "email" || name === "password") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);
    setError(undefined);

    try {
      const url = USER_ENDPOINTS.getUser;
      const { data } = await http.post(USER_API.SIGN_IN, formData);

      console.log(data);

      setToken(data.token);
      dispatch(updateUser(data.user));
      dispatch(setIsAuthorized(true));
      navigate("/");
      setIsLoading(false);
      toast.success("Successfully logged in");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      toast.error(error.response.data.message);
    }
  };

  const redirectToSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="bg-login pt-[50px] pb-[80px]">
        <div className="container mx-auto md:px-6 px-4">
          <CommonHeader />
          <div className="md:flex items-center justify-center md:mt-16 mt-6 w-full">
            <div className="md:w-[50%] hidden md:flex justify-center">
              <img src={login} alt=" Login image" />
            </div>
            <div className="lg:w-[50%] md:w-[50%] w-full pt-12 m:pt-0">
              <form onSubmit={handleSubmit}>
                <LoginSection
                  heading="Login"
                  text="of our cherished Pet loving"
                  label1="username or name"
                  placeholder1="username and email"
                  label2="password"
                  placeholder2="*************"
                  handleChange={handleChange}
                  formData={formData}
                />

                <a
                  href="/forgetpassword"
                  className="text-[16px] md:w-[90%] w-full flex justify-end text-[#FA1D1D] underline "
                >
                  Forget your password
                </a>
                <Button
                  disabled={isLoading}
                  className="md:w-[90%] w-full my-5 text-[16px]"
                  variant={{ theme: "dark", thickness: "thick" }}
                >
                  {isLoading ? "...Wait" : "Continue"}
                </Button>
                <div className="flex md:w-[90%] w-full justify-center">
                  <p className="mr-2 md:text-[22px] text-[15px]">
                    Don't have an account?
                  </p>
                  <a
                    onClick={redirectToSignup}
                    className="text-[#FF553E] md:text-[22px] text-[15px] font-bold uppercase cursor-pointer"
                  >
                    Signup
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
