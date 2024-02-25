const express = require("express");
const router = express.Router();

const {contactcontroller} = require("../controllers/contactcontroller")

router.route("/contact").post(contactcontroller);
module.exports = router ; 