const USER_BASE_URL = "/api/users";
const PET_BASE_URL = "/api/pets";

export const USER_ENDPOINTS = {
  getUser: `${USER_BASE_URL}/test`,
  changePassword: `${USER_BASE_URL}/change-password`,
  logOut: `${USER_BASE_URL}/logout`,
  petList: `${USER_BASE_URL}/pet-list`,
  contact: `${USER_BASE_URL}/contact`,
};

export const PET_ENDPOINTS = {
  petList: `${PET_BASE_URL}/pet-list`,
  postPetList: `${PET_BASE_URL}/register`,
};
