import api from "./api";

export const submitContactForm = async (
  payload
) => {
  const response = await api.post(
    "/contact",
    payload
  );

  return response.data;
};