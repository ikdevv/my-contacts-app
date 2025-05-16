import React from "react";
import type { Contact } from "../types";

interface ContactCardProps {
  contacts: Contact[];
}

const ContactCard: React.FC<ContactCardProps> = ({ contacts }) => {
  return (
    <div className="grid gap-6">
      {contacts.map((contact) => (
        <div
          className="p-6 bg-gray-500 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
          key={contact.id}
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            {contact.name}
          </h2>
          <div className="flex items-center justify-between">
            {contact.email} - {contact.phone}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
