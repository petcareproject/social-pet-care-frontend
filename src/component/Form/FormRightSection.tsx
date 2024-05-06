import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import http from "../../http/http";
import CommDropDown from "../Dropdown/CommDropDown";

import { PET_API } from "../utils/ApiEndPoints";
import toast from "react-hot-toast";
import { pet } from "../../utlis/types/pets.type";
import { PET_ENDPOINTS } from "../../utlis/apiRoutes";
import { useNavigate } from "react-router-dom";

const initialValues = {
  petName: "",
  gender: "",
  address: "",
  dob: "",
  breed: "",
  location: "",
  category: "",
  about: "",
};

const petProfileValidationSchema = Yup.object({
  petName: Yup.string().required("Pet name is required"),
  gender: Yup.string().required("Gender name is required"),
  address: Yup.string().required("Address is required"),
  dob: Yup.date().required("Please Enter pet's date of birth"),
  breed: Yup.string().required("Breed is required"),
  location: Yup.string().required("location is required"),
  category: Yup.string().required("Pet's category is required"),
  about: Yup.string().required("Please add at least few line about your pet"),
});

const GENDER_DROPDOWN = ["Male", "Female", "Other"];

const FormRightSection = ({
  petImage,
  setPetImage,
  petData,
}: {
  petImage: any;
  setPetImage: React.Dispatch<React.SetStateAction<any>>;
  petData?: pet;
}) => {
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [genderDropDown, setGenderDropDown] = useState("");
  const [fetchState, setFeatchState] = useState({
    isLoading: false,
    error: null,
  });

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    resetForm,
    setFieldValue,
  } = useFormik({
    validationSchema: petProfileValidationSchema,
    initialValues,
    onSubmit: (values) => {
      if (petData) updatePet(values);
      if (!petData) registerPet(values);
    },
  });

  useEffect(() => {
    if (!petData) {
      resetForm();
      return;
    }

    setFieldValue("petName", petData.petName);

    if (petData?.gender) {
      setGenderDropDown(petData.gender);
      setFieldValue("gender", petData.petName);
    }

    setFieldValue("category", petData.petCategory);
    setFieldValue("breed", petData.petBreeds);

    setFieldValue("dob", petData.dob.split("T")[0]);

    setFieldValue("location", petData.location);
    setFieldValue("address", petData.address);
    setFieldValue("about", petData.aboutPets);
  }, [petData]);

  const registerPet = async (data) => {
    try {
      setFeatchState({ ...fetchState, isLoading: true });
      const formData = new FormData();
      const body = {
        petName: data.petName,
        petCategory: data.category,
        gender: data.gender,
        petBreads: data.breed,
        dob: data.dob,
        location: data.location,
        address: data.address,
        aboutPets: data.about,
      };

      for (const key in body) {
        formData.append(key, body[key]);
      }

      if (petImage.length) {
        petImage.forEach((val) => {
          formData.append("imageFile", val);
        });
      }

      await http.post(PET_API.REGISTER_PET, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Pet registration Successful 🐶");
      resetForm();
      setPetImage([]);
      setFeatchState({ ...fetchState, isLoading: false });
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 1,
      });
      setPetImage(null);
      setFeatchState({ ...fetchState, isLoading: false });
    }
  };

  const updatePet = async (data) => {
    try {
      setFeatchState({ ...fetchState, isLoading: true });
      const formData = new FormData();
      const body = {
        petName: data.petName,
        petCategory: data.category,
        gender: data.gender,
        petBreads: data.breed,
        dob: data.dob,
        location: data.location,
        address: data.address,
        aboutPets: data.about,
      };

      for (const key in body) {
        formData.append(key, body[key]);
      }

      if (petImage.length) {
        petImage.forEach((val) => {
          formData.append("imageFile", val);
        });
      }

      await http.put(PET_ENDPOINTS.editPet + petData._id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Pet Updated Successful 🐶");
      navigate("/user_profile");
      resetForm();
      setPetImage([]);
      setFeatchState({ ...fetchState, isLoading: false });
    } catch (error) {
      toast.error(error.response.data.message, {
        duration: 1,
      });
      setPetImage(null);
      setFeatchState({ ...fetchState, isLoading: false });
    }
  };
  return (
    <div className="md:w-[45%] w-full">
      <form onSubmit={handleSubmit}>
        <div className="mb-6 mt-10 md:mt-0">
          <div className="flex gap-4 justify-between flex-col md:flex-row">
            <div className="flex-1">
              <div>
                <label className="text-[14px] uppercase w-full">
                  Pet's Name
                </label>
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
                  placeholder="Alex"
                />
              </div>

              {touched.petName && errors.petName && (
                <p className="text-red-400 mt-1 ml-2">{errors.petName}</p>
              )}
            </div>
            <div className="flex-1">
              <div>
                <label className="text-[14px] uppercase w-full ">Gender</label>
              </div>
              <CommDropDown
                setIsDropDownOpen={setIsDropDownOpen}
                isDropDownOpen={isDropDownOpen}
                classNameBtn={
                  "py-3 px-6 border border-black rounded-full flex gap-3 w-full items-center justify-between "
                }
                selectedItem={genderDropDown ? genderDropDown : "Select Gender"}
              >
                {GENDER_DROPDOWN.map((gender) => (
                  <li
                    onClick={() => {
                      setFieldValue("gender", gender);
                      setGenderDropDown(gender);
                      setIsDropDownOpen(false);
                    }}
                    className="w-full p-2 cursor-pointer hover:text-red-300 bg-white"
                  >
                    {gender}{" "}
                  </li>
                ))}
              </CommDropDown>

              {touched.gender && errors.gender && (
                <p className="text-red-400 mt-1 ml-2 ">{errors.gender}</p>
              )}
            </div>
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
                className="outline-none w-full placeholder:opacity-60 placeholder:font-normal "
              />

              {/* <div className="dropdown inline-block relative w-full mt-4 md:mt-0">
                <select
                  id="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                >
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                </select>
              </div> */}
            </div>
            {touched.category && errors.category && (
              <p className="text-red-400 mt-1 ml-2">{errors.category}</p>
            )}
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
                className="placeholder:opacity-60 placeholder:font-normal w-full outline-none"
              />

              {/* <select
                id="breed"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.breed}
              >
                <option value="dogBBB">DogB</option>
                <option value="catBBB">CatB</option>
              </select> */}
            </div>
            {touched.breed && errors.breed && (
              <p className="text-red-400 mt-1 ml-2">{errors.breed}</p>
            )}
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
                max={new Date().toISOString().split("T")[0]}
                id="dob"
                type="date"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.dob}
                placeholder="03/01/2023"
                className="py-3 px-6 border border-black rounded-full w-full outline-none placeholder:opacity-60"
                placeholder:font-normal
              />
              {touched.dob && errors.dob && (
                <p className="text-red-400 mt-1 ml-2">{errors.dob}</p>
              )}
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
                placeholder:font-normal
              />
              {touched.location && errors.location && (
                <p className="text-red-400 mt-1 ml-2">{errors.location}</p>
              )}
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
          {touched.address && errors.address && (
            <p className="text-red-400 mt-1 ml-2">{errors.address}</p>
          )}
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
          {touched.about && errors.about && (
            <p className="text-red-400 mt-1 ml-2">{errors.about}</p>
          )}
        </div>

        {petData ? (
          <button
            type="submit"
            className="lg:py-4 lg:px-6 md:py-3 md:px-3 px-2 py-3 bg-[#FF553E] rounded-full w-full outline-none text-[20px] text-white disabled:opacity-60"
          >
            {fetchState.isLoading ? "...Loading" : "Update"}
          </button>
        ) : (
          <button
            disabled={fetchState.isLoading}
            type="submit"
            className="lg:py-4 lg:px-6 md:py-3 md:px-3 px-2 py-3 bg-[#FF553E] rounded-full w-full outline-none text-[20px] text-white disabled:opacity-60"
          >
            {fetchState.isLoading ? "...Loading" : "Submit"}
          </button>
        )}
      </form>
    </div>
  );
};

export default FormRightSection;
