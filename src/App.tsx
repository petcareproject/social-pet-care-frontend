import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import setup from "./utlis/intersecptor";

import "./App.css";
import PasswordChangedSuccessPage from "./component/Login/ChangePassword";
import Contact from "./component/ContactUs/Contact";
import UserProfile from "./component/UserProfile/UserProfile";

function App() {
  setup();

  const queryClient = new QueryClient();

  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<HomePage />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/forgetpassword"
                element={<ForgetPassword />}
              ></Route>
              <Route path="/resetpassword" element={<ResetPassword />}></Route>
              <Route
                path="/change_password"
                element={<ChangePassword />}
              ></Route>
              <Route
                path="/passwordchanged"
                element={<PasswordChangedSuccessPage />}
              ></Route>
              <Route path="/otp" element={<Otp />}></Route>
              <Route path="/form" element={<FormSection />}></Route>
              <Route path="/search" element={<Nearby />}></Route>
              <Route path="/detail" element={<PetDetail />}></Route>
              <Route path="/about" element={<AboutUs />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/user_profile" element={<UserProfile />}></Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
