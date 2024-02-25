const express = require("express");
const router = express.Router();

const { getAllContacts } = require('../controllers/getallcontactcontroller')

router.route("/contact").get(getAllContacts);
module.exports = router; 