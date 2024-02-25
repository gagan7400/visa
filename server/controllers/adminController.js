const Contact = require('../models/contactmodel');
const catchAsyncErrors = require("../middleware/catchAsyncError");

exports.contactcontroller = catchAsyncErrors(async (req, res, next) => {
    try {
        const { name, email, country, countrycode, visacountry, whatsupcountrycode, whatsupnumber, message, number } = req.body;
        const data = await Contact.create({
            name, email, country, countrycode, visacountry, whatsupcountrycode, whatsupnumber, message, number
        })
        res.status(201).json({
            success: true,
            data
        });
        console.log("data sent success fully")
    } catch (error) {
        console.error('Error saving contact details:');
        res.status(500).send('Error saving contact details. Please try again later.');
    }
})