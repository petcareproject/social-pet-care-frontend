import mail from "./assets/msg.png";
import address from "./assets/address.png";
import footer_logo from "./assets/heading-img.png.png";

const FooterLogoSection = () => {
  return (
    <div className="lg:w-[33%] md:w-[50%] w-full">
      <div className="flex mb-4 md:mb-0">
        <img
          src={footer_logo}
          alt="footer logo"
          className="md:w-[55px] md:h-[55px]"
        />
        <h1 className="lg:text-[39px] md:text-[35px] text-[39px] ml-2 font-semibold">
          Socialpet
        </h1>
      </div>

      <p className="text-[16px] leading-8 md:my-6 xl:mr-24 mr-0 mb-4 md:mb-0 text-[#444444]">
        At vero eos et accusam justo duo dolo res et ea rebum. Stet clita kasd
        guber gren. Aenean sollici tudin lorem qsben elit clita.
      </p>

      <div className="flex mb-4 mt-8">
        <img src={mail} alt="mail" />
        <p className="ml-4 mt-3 text-[#555555] text-[15px] leading-6 font-semibold">
          Admin@gmail.com
        </p>
      </div>

      <div className="flex mb-4">
        <img src={address} alt="address" />
        <p className="ml-4 mt-3 text-[#555555] text-[15px] leading-6 font-semibold">
          new delhi, south tukoganj, INDIA
        </p>
      </div>
    </div>
  );
};

export default FooterLogoSection;
