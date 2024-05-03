export const setToken = (token: string, remeberMeCheck = true) => {
  if (typeof window === "undefined") {
    return null;
  }
  localStorage.setItem("auth_token", token);
  return;
};

export const getToken = () => {
  if (typeof window === "undefined") {
    return null;
  }
  const token = localStorage.getItem("auth_token");
  return token;
};

export const deleteToken = () => {
  if (typeof window === "undefined") {
    return null;
  }
  localStorage.removeItem("auth_token");
  return;
};
