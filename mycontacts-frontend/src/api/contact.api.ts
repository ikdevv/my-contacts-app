import type { Contact } from "@/types";
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

export const addContact = async (contact: Contact) => {
  try {
    const result = await axios.post(`${url}/contacts`, contact, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
};
