import LogoHeader from "../HeroSection/LogoHeader";
import HeroSection from "../NearbyPet/HeroSection";
import image1 from "./assets/div.banner-img-1.png";
import image2 from "./assets/div.banner-img-2.png";
import call from "./assets/call.png";
import email from "./assets/email.png";
import FooterSection from "../Footer/FooterSection";
import { useFormik } from "formik";
import http from "../../http/http";
import { USER_ENDPOINTS } from "../../utlis/apiRoutes";
import * as Yup from "yup";
import toast from "react-hot-toast";
// import Navbar from "../HeroSection/Navbar";

const initialValues = {
  contactName: "",
  email: "",
  phone: "",
  text: "",
};

const userContactValidationSchema = Yup.object({
  contactName: Yup.string().required("Contact name is required"),
  email: Yup.string().required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  text: Yup.string().required("Text is required"),
});

const Contact = () => {
  const { values, handleChange, handleBlur, handleSubmit, resetForm } =
    useFormik({
      // validationSchema: userContactValidationSchema,
      initialValues,
      onSubmit: (values) => {
        contact(values);
      },
    });

  const contact = async (data) => {
    try {
      const res = await http.post(USER_ENDPOINTS.contact, data);
      console.log("res ------>", res);
      toast.success(res.data.message);
      resetForm();
    } catch (error) {
      console.log("error -------->", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-common">
        {/* <Navbar /> */}
        <LogoHeader />
        <div className="container mx-auto md:px-6 px-4">
          <HeroSection
            title="Contact Us"
            link1="Home"
            link2="contact us"
            image1={image1}
            image2={image2}
          />
        </div>
      </div>
      <div className="bg-register">
        <div className="container mx-auto md:px-6 px-4 py-10">
          <div className="md:flex block justify-between py-20">
            <div className="w-full md:w-[60%] md:mx-auto">
              <div className="font-bold lg:text-[54px] md:text-[50px] text-[50px] flex">
                <h1 className="text-black">Get in</h1>{" "}
                <h2 className="text-red-500 ml-2"> Touch </h2>
              </div>
              <h6 className="text-[16px] mb-10 mt-6">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </h6>
              <form onSubmit={handleSubmit}>
                <div className="my-6">
                  <input
                    id="contactName"
                    name="contactName"
                    value={values.contactName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    className="py-3 px-6 border border-black rounded-full w-full outline-none bg-transparent"
                    placeholder="Name"
                  />
                </div>

                <div className="my-6">
                  <input
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    placeholder="Email"
                    className="py-3 px-6 border border-black rounded-full w-full outline-none bg-transparent"
                  />
                </div>

                <div className="w-full my-6">
                  <div>
                    <input
                      id="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      placeholder="Phone Number"
                      className="py-3 px-6 border border-black rounded-full w-full outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div>
                    <textarea
                      id="text"
                      value={values.text}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      cols={45}
                      placeholder="Enter your text here......"
                      className="py-3 px-6 border border-black rounded-xl w-full outline-none bg-transparent"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="lg:py-4 lg:px-6 md:py-3 md:px-3 px-2 py-3 bg-[#FF553E] rounded-full w-full outline-none text-[20px] text-white "
                >
                  Send
                </button>
              </form>

              <div className="md:grid grid-cols-2 block justify-between mt-16">
                <div className="flex">
                  <div className="mt-4">
                    <img
                      src={call}
                      alt="phone nummd:ber"
                      className="w-[29px] h-[29px] md:w-[18px] md:h-[18px] xl:w-[29px] xl:h-[29px]"
                    />
                  </div>
                  <div className="xl:ml-4 md:ml-2 ml-4">
                    <h6 className="text-uppercase md:text-[18px] text-[15px] mt-2 font-semibold">
                      PHONE
                    </h6>
                    <a
                      href="tel:+03 5432 1234"
                      className="text-[#FA441D] xl:text-[18px] md:text-[14px] text-[18px]"
                    >
                      1234567890
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="mt-4">
                    <img
                      src={email}
                      alt="phone number"
                      className="w-[29px] h-[29px] md:w-[18px] md:h-[18px] xl:w-[26px] xl:h-[26px]"
                    />
                  </div>
                  <div className="xl:ml-4 md:ml-2 ml-4">
                    <h6 className="text-uppercase md:text-[18px] text-[15px] mt-2 font-semibold">
                      Email
                    </h6>
                    <a
                      href="mailto:info@marcc.com.au"
                      className="text-[#FA441D] xl:text-[18px] md:text-[14px] text-[18px]"
                    >
                      admin@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Contact;
