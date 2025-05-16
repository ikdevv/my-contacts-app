import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getAllImages = async () => {
  try {
    const result = await axios.get(`${url}/images/`, {});
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
