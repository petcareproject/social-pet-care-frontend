import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import arrow from "./assets/Symbol.png";
const QuickLinks = () => {
  const [isLogin, setIsLogin] = useState(false);
  // const user = useAppSelector((user) => user.user.user);

  const [isFixed, setIsFixed] = useState(false);

  const checkLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleContactClick = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling animation
    });
  };

  return (
    <div className="lg:w-[25%] md:w-[40%] md:pl-[25px] w-full mt-6">
      <h6 className="text-[24px] leading-6 font-bold bottom-border">
        Quick Links
      </h6>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="mt-10 text-center">
            <Link to={"/"} onClick={handleContactClick}>
              <Nav.Item className="flex mb-6 text-[16px] leading-6">
                <img
                  src={arrow}
                  alt="arrow"
                  className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
                />
                <p className="text-[16px] font-semibold text-[#555555]">Home</p>
              </Nav.Item>
            </Link>
            <Link to={"/about"} onClick={handleContactClick}>
              <Nav.Item className="flex mb-6 text-[16px] leading-6">
                <img
                  src={arrow}
                  alt="arrow"
                  className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
                />
                <p className="text-[16px] font-semibold text-[#555555]">
                  {" "}
                  About Us
                </p>
              </Nav.Item>
            </Link>
            <Link to={"/contact"} onClick={handleContactClick}>
              <Nav.Item className="flex mb-6 text-[16px] leading-6">
                <img
                  src={arrow}
                  alt="arrow"
                  className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
                />
                <p className="text-[16px] font-semibold text-[#555555]">
                  {" "}
                  Contact Us
                </p>
              </Nav.Item>
            </Link>
            <Link to={"/login"}>
              <Nav.Item className="flex mb-6 text-[16px] leading-6">
                {" "}
                <img
                  src={arrow}
                  alt="arrow"
                  className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
                />
                <p className="text-[16px] font-semibold text-[#555555]">
                  Login
                </p>
              </Nav.Item>
            </Link>

            <Link to={"/signup"}>
              <Nav.Item className="flex mb-6 text-[16px] leading-6">
                {" "}
                <img
                  src={arrow}
                  alt="arrow"
                  className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
                />
                <p className="text-[16px] font-semibold text-[#555555]">
                  Signup
                </p>
              </Nav.Item>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default QuickLinks;
