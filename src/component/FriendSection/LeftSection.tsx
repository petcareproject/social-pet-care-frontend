import CommonData from "../CommonData";
import paw from "../../assets/paw-title.svg fill.png";
import Button from "../ui/Button";

const LeftSection = () => {
  return (
    <>
      <div className="md:w-[50%] w-full my-auto md:pb-6">
        <CommonData
          className="text-color"
          img1={paw}
          span="Trusted pet's"
          heading="Looking for anyone to walk your friend?"
          description={
            <p className="left-section-friend">
              "We'll help your dog grow through soclisation and learn how to
              explore their world. Play, love and exercise for your dog while
              you're out. Our dog walking service runs throughout the day."
            </p>
          }
        />
        <Button
          variant={{ theme: "dark", thickness: "thick" }}
          className="rounded-full 2xl:mt-6"
        >
          Know more
        </Button>
      </div>
    </>
  );
};

export default LeftSection;
