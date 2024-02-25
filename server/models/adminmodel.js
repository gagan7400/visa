const mongoose = require("mongoose");
const validator = require("validator");
const contactSchema = new mongoose.Schema({
    "email": {
        "type": String,
        "required": [true, "Please provide your email"],
        "unique": true,
        "validator": [validator.isEmail, 'Please provide a correct Email Address']

    },


})
module.exports = mongoose.model('admin', contactSchema);