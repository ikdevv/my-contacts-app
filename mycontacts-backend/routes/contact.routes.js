const express = require("express");
const {
  getAllContacts,
  createContact,
} = require("../controllers/contact.controller");
const router = express.Router();

router.get("", getAllContacts);
router.post("", createContact);

module.exports = router;
