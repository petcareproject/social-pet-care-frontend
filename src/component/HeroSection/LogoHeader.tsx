import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import logo from "./assets/heading-img.png.png";
import { useAppSelector } from "../../store/typedReduxHooks";
import UserActionDropDown from "../Dropdown/UserActionDropDown";

const LogoHeader = () => {
  const [isLogin, setIsLogin] = useState(false);
  const user = useAppSelector((user) => user.user.user);
  const navigate = useNavigate();
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

  const redirectToLogin = () => {
    navigate("/login");
  };

  const redirectToHomepage = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    redirectToHomepage();
  };

  return (
    <>
      <div
        className={`bg-white shadow-lg container mx-auto md:block hidden ${
          isFixed
            ? "sticky container top-0 left-0 right-0 z-50 mt-[7px] w-full mx-auto "
            : ""
        }`}
      >
        <div className="px-4 py-2 mx-auto flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={redirectToHomepage}
          >
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <h1 className="ml-2 font-bold text-[24px]">SocialPet</h1>
          </div>

          <div className="md:flex hidden">
            <Navbar className="flex">
              <Nav className="flex">
                <Nav.Link href="/" className="px-4">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="px-4">
                  About Us
                </Nav.Link>
                <Nav.Link href="/" className="px-4">
                  Service
                </Nav.Link>
                <Nav.Link href="/contact" className="px-4">
                  Contact
                </Nav.Link>
                <Nav.Link href="/form" className="px-4">
                  ListPet
                </Nav.Link>
                {!user && (
                  <Nav.Link href="/signup" className="px-4">
                    Signup
                  </Nav.Link>
                )}
              </Nav>
            </Navbar>
          </div>

          <div>
            {!user && (
              <Button
                variant={{ theme: "dark", thickness: "thick" }}
                className="px-4 py-2 lg:px-10 lg:py-4 "
                onClick={redirectToLogin}
              >
                Login
              </Button>
            )}
            {user && <UserActionDropDown />}
          </div>
        </div>
      </div>

      {/* Responsive navbar */}
      <nav className="bg-white md:hidden fixed w-full block z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <ul className="navigation container flex flex-wrap justify-between items-center relative mx-auto py-6">
          <a className="logo" href="#">
            <h3 className="font-bold text-2xl" onClick={redirectToHomepage}>
              SocialPet
            </h3>
          </a>
          <input type="checkbox" id="check" />

          <span className="menu  ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Service</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            {!user && (
              <li>
                <a href="/signup">Signup</a>
              </li>
            )}

            {/* <li>
              <a href="/login">Login</a>
            </li> */}
            <li>
              {!isLogin && (
                <a
                  // variant={{ theme: "dark", thickness: "thick" }}
                  className="px-4 py-2 lg:px-10 lg:py-4 "
                  onClick={redirectToLogin}
                >
                  Login
                </a>
              )}
              {isLogin && (
                <a
                  // variant={{ theme: "dark", thickness: "thick" }}
                  className="px-4 py-2 lg:px-10 lg:py-4 "
                  onClick={handleLogout}
                >
                  Logout
                </a>
              )}
            </li>

            <label htmlFor="check" className="close-menu">
              X
            </label>
          </span>

          <label htmlFor="check" className="open-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </ul>
      </nav>

      {/* Responsive navbar */}
    </>
  );
};

export default LogoHeader;
