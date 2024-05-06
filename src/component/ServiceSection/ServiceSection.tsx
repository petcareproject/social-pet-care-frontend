import CommonService from "./CommonService";
import image1 from "./assets/Adoption.png";
import image2 from "./assets/Pawprint.png";
import image3 from "./assets/Veterinary.png";
import image4 from "./assets/Pet care.png";

const ServiceSection = () => {
  return (
    <>
      <div className="container mx-auto md:px-6 px-4 my-16 md:flex block justify-between 2xl:w-[60%] lg:w-[75%] w-full">
        <CommonService
          image={image1}
          heading="100"
          text="+"
          name="Client Served"
        />

        <CommonService
          image={image2}
          heading="99"
          text="%"
          name="Customer Satisfaction"
        />

        <CommonService
          image={image3}
          heading="20"
          text="K"
          name="Pets Services"
        />

        <CommonService
          image={image4}
          heading="400"
          text="+"
          name="Bread’s Control"
        />
      </div>
    </>
  );
};

export default ServiceSection;
