import { useEffect, useState } from "react";
import { getAllContacts } from "../api/contact.api";
import type { Contact } from "../types";
import ContactCard from "../components/contactCard";

const AllContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function fetchContacts() {
      const response = await getAllContacts();
      if (response && response.data) {
        setContacts(response.data);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div>
      <ContactCard contacts={contacts} />
    </div>
  );
};

export default AllContacts;
