const Contact = require("../models/contactmodel");
// const ErrorHander = require("../utlis/errorhandler");
// const catchAsyncErrors = require("../middleware/catchAsyncError")
exports.getAllContacts =  async (req, res, next) => {
    const contacts = await Contact.find();
  
    res.status(200).json({
      success: true,
      contacts,
    });
  } ;
  