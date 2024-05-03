import image1 from "./assets/Item → pets.jpg.png";
import img2 from "./assets/pet2.png";
import img3 from "./assets/pet3.png";
import location from "./assets/location.png";
import email from "./assets/email.png";
import call from "./assets/call.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: image1,
    thumbnail: img2,
  },
  {
    original: image1,
    thumbnail: img3,
  },
];

const DetailLeft = () => {
  return (
    <>
      <div className="xl:w-[65%] lg:w-[70%] md:w-[60%] w-full ">
        <h1 className="text-[30px] font-semibold">Stephen King</h1>

        <div className="md:mt-10 mt-16">
          <ImageGallery items={images} autoPlay={true} />
        </div>

        <div className="mb-6 2xl:w-[85%] mt-16">
          <h1 className="text-[23px] mb-8">About me</h1>
          <p className="text-[16px] mb-6 leading-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            assumenda alias aperiam repellat dolor reiciendis dicta facilis!
            Voluptatibus harum ipsa odit pariatur voluptatem suscipit
            exercitationem esse minus ipsam. Reprehenderit magni molestiae
            laboriosam architecto libero, cupiditate nobis quae, unde nihil
            commodi tempore perspiciatis, ad placeat ex incidunt praesentium?
            Tenetur ratione nam asperiores delectus iste quae vero inventore est
            aperiam suscipit? Doloremque, est. Porro fugiat quos voluptatum at
            iure! Quos earum quis optio ipsum at harum ut, ea deleniti unde modi
            qui debitis, sapiente voluptatibus explicabo{" "}
          </p>

          <p className="text-[16px] mb-10 leading-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
            assumenda alias aperiam repellat dolor reiciendis dicta facilis!
            Voluptatibus harum ipsa odit pariatur voluptatem suscipit
            exercitationem esse minus ipsam. Reprehenderit magni molestiae
            laboriosam architecto libero, cupiditate nobis quae, unde nihil
            commodi tempore perspiciatis, ad placeat ex incidunt praesentium?
            Tenetur ratione nam asperiores delectus iste quae vero inventore est
            aperiam suscipit? Doloremque, est. Porro fugiat quos voluptatum at
            iure! Quos earum quis optio ipsum at harum ut, ea deleniti unde modi
            qui debitis, sapiente voluptatibus explicabo{" "}
          </p>

          <h1 className="text-[23px] mb-4">Want to Adopt me?</h1>
          <p className="text-[16px] mb-2 leading-8">
            Quisque mauris nec this is to make this text long as good ante
            bibendum, at pretium diam vehicula. Morbi non metus eu libero
            interdum tristique ut vel leo
          </p>
        </div>

        <div className="lg:flex block lg:justify-between justify-center w-full my-20 bg-[#FEF7E7] px-4 py-6 rounded-xl">
          <div className="lg:flex block lg:w-[33.33%] w-full lg:border-r-2 mb-6 md:mb-0">
            <div className="xl:mr-2 lg:mr-1 2xl:w-[10%] lg:w-[15%] flex justify-center">
              <img
                src={location}
                alt="location"
                className="mb-1 w-[20px] h-[21px]"
              />
            </div>
            <div className="2xl:w-[80%] lg:w-[90%] lg:text-left w-full text-center">
              <h6 className="font-semibold text-[17px]">Andrews 220 street</h6>
              <p className="text-[#444444] xl:text-[16px] lg:text-[15px] 2xl:mr-16 mr-0 md:mt-2 mt-1">
                8576 Sycamore Avenue, United Kingdom
              </p>
            </div>
          </div>

          <div className="lg:flex lg:w-[33.33%] w-full lg:border-r-2 lg:justify-center mb-6 md:mb-0">
            <div className="mr-2 flex justify-center">
              <img src={email} alt="location" className="w-[21px] h-[21px]" />
            </div>
            <div className="text-center">
              <h6 className="font-semibold text-[17px]">Admin@gmail.com</h6>
            </div>
          </div>

          <div className="lg:flex lg:w-[33.33%] w-full justify-center mb-6 md:mb-0">
            <div className="mr-2 flex justify-center">
              <img src={call} alt="location" className="w-[21px] h-[21px]" />
            </div>
            <div className="text-center">
              <h6 className="font-semibold text-[17px]">+44 1234567890</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailLeft;
