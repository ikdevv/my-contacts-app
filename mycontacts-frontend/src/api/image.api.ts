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

export const uploadImage = async (image: File) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const result = await axios.post(`${url}/images/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const deleteImage = async (id: string) => {
  try {
    const result = await axios.delete(`${url}/images/${id}`, {});
    console.log(result);
    console.log(``);
  } catch (error) {
    console.error(error);
  }
};
