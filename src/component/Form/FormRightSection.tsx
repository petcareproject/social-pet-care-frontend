import { useFormik } from "formik";
import http from "../../http/http";
import { PET_API } from "../utils/ApiEndPoints";
const initialValues = {
  petName: "",
  address: "",
  dob: "",
  breed: "",
  location: "",
  category: "",
  about: "",
};

const FormRightSection = () => {
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      registerPet(values);
    },
  });

  const registerPet = async (data) => {
    try {
      const res = await http.post(PET_API.List_Data, data);
      console.log("res ------>", res);
    } catch (error) {
      console.log("error -------->", error);
    }
  };
  return (
    <div className="md:w-[45%] w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-6 mt-10 md:mt-0">
          <div>
            <label className="text-[14px] uppercase w-full">Pet's Name</label>
          </div>
          <div className="py-3 px-6 border border-black rounded-full">
            <input
              id="petName"
              name="petName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.petName}
              type="text"
              className="outline-none w-full placeholder:opacity-60"
            />
          </div>
        </div>

        <div className="md:flex justify-between w-full mb-6">
          <div className="md:w-[48%] w-full md:mb-0 mb-6">
            <div>
              <label className="text-[14px] uppercase w-full">
                Select Pets Category
              </label>
            </div>
            <div className="px-6 py-3 border border-black rounded-full w-full  text-gray-700 font-semibold items-center flex justify-between z-1">
              <input
                id="category"
                name="category"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                type="text"
                placeholder="Dog"
                className="outline-none w-full placeholder:opacity-60"
              />
            </div>
          </div>

          <div className="md:w-[48%] w-full">
            <div>
              <label className="text-[14px] uppercase w-full">
                Select breads
              </label>
            </div>
            <div className="px-6 py-3 border border-black rounded-full w-full  text-gray-700 font-semibold items-center flex justify-between z-1">
              <input
                id="breed"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.breed}
                placeholder="Bulldog"
                className="placeholder:opacity-60 w-full outline-none"
              />
            </div>
          </div>
        </div>

        <div className="md:flex justify-between w-full mb-6">
          <div className="md:w-[48%] w-full md:mb-0 mb-6">
            <div>
              <label className="text-[14px] uppercase w-full">
                Date of birth
              </label>
            </div>
            <div>
              <input
                id="dob"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
                placeholder="03/01/2023"
                className="py-3 px-6 border border-black rounded-full w-full outline-none placeholder:opacity-60"
              />
            </div>
          </div>

          <div className="md:w-[48%] w-full">
            <div>
              <label className="text-[14px] uppercase w-full">
                select Location
              </label>
            </div>
            <div>
              <input
                id="location"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                placeholder="New york"
                className="py-3 px-6 border border-black rounded-full w-full outline-none placeholder:opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div>
            <label className="text-[14px] uppercase w-full">
              What's your address?
            </label>
          </div>
          <div>
            <input
              id="address"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
              className="py-3 px-6 border border-black rounded-full w-full outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <div>
            <label className="text-[14px] uppercase w-full">About Pets</label>
          </div>
          <div>
            <textarea
              id="about"
              rows={5}
              cols={45}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.about}
              className="py-3 px-6 border border-black rounded-xl w-full outline-none"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="lg:py-4 lg:px-6 md:py-3 md:px-3 px-2 py-3 bg-[#FF553E] rounded-full w-full outline-none text-[20px] text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRightSection;
