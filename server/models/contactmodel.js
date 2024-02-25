const mongoose = require("mongoose");
const validator = require("validator");
const contactSchema = new mongoose.Schema({
    "email": {
        "type": String,
        "required": [true, "Please provide your email"],
        "unique": true,
        "validator": [validator.isEmail, 'Please provide a correct Email Address']

    },
    "name": {
        "type": "string"
        , required: true
    },

    "country": {
        "type": "string" 
    },
    "countrycode": {
        "type": "string"
    },
    "visacountry": {
        "type": "string"
    },
    "whatsupcountrycode": {
        "type": "string"
    },
    "whatsupnumber": {
        "type": "Number"
    },
    "message": {
        "type": "string"
    },
    "number": {
        "type": "Number"
    },
    "date":{
        "type":"string"
    }

})
module.exports = mongoose.model('contactsdata', contactSchema);