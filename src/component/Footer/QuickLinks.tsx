import arrow from "./assets/Symbol.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const QuickLinks = () => {
  return (
    <div className="lg:w-[25%] md:w-[40%] md:pl-[25px] w-full mt-6">
      <h6 className="text-[24px] leading-6 font-bold bottom-border">
        Quick Links
      </h6>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="mt-10 text-center">
            <Nav.Link href="/" className="flex mb-6 text-[16px] leading-6">
              <img
                src={arrow}
                alt="arrow"
                className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
              />
              <p className="text-[16px] font-semibold text-[#555555]">Home</p>
            </Nav.Link>
            <Nav.Link href="/about" className="flex mb-6 text-[16px] leading-6">
              <img
                src={arrow}
                alt="arrow"
                className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
              />
              <p className="text-[16px] font-semibold text-[#555555]">
                {" "}
                About Us
              </p>
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className="flex mb-6 text-[16px] leading-6"
            >
              <img
                src={arrow}
                alt="arrow"
                className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
              />
              <p className="text-[16px] font-semibold text-[#555555]">
                {" "}
                Contact Us
              </p>
            </Nav.Link>
            <Nav.Link href="/login" className="flex mb-6 text-[16px] leading-6">
              {" "}
              <img
                src={arrow}
                alt="arrow"
                className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
              />
              <p className="text-[16px] font-semibold text-[#555555]">Login</p>
            </Nav.Link>
            <Nav.Link
              href="/signup"
              className="flex mb-6 text-[16px] leading-6"
            >
              <img
                src={arrow}
                alt="arrow"
                className="mr-4 w-[7px]  h-[11px] mt-[4px]  "
              />
              <p className="text-[16px] font-semibold text-[#555555]">Signup</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default QuickLinks;
