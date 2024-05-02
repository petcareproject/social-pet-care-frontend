import logo from "../SignUp/assets/div.item--inner.png";
import { useNavigate } from "react-router-dom";

const CommonHeader = () => {
  const navigate = useNavigate();
  const redirectToHomepage = () => {
    navigate("/");
  };

  return (
    <>
      <img src={logo} alt="logo image" onClick={redirectToHomepage} />
    </>
  );
};

export default CommonHeader;
