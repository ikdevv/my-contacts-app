const expressAsyncHandler = require("express-async-handler");
const contactModel = require("../models/contact.model");

const getAllContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await contactModel.find();
  res.status(200).json(contacts);
});

const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if ((!name, !email, !phone)) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await contactModel.create({
    name,
    email,
    phone,
  });
  res
    .status(201)
    .json({ contact: contact, message: "Contact created successfully" });
};

const getContactById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await contactModel.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

const updateContact = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await contactModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res
    .status(200)
    .json({ contact: contact, message: "contact updated successfully" });
});

const deleteContact = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await contactModel.findByIdAndDelete(id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res
    .status(200)
    .json({ contact: contact, message: "contact deleted successfully" });
});

module.exports = {
  getAllContacts,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
