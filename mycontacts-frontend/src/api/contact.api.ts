import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getAllContacts = async () => {
  try {
    const result = await axios.get(`${url}/contacts`, {});
    return result;
  } catch (error) {
    console.error(error);
  }
};
