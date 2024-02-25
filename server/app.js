const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
 
const errorMiddleware = require("./middleware/error")
app.use(express.json());
app.use(cors())
 

if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "server/config/config.env" });
}
//route imports 
const contactroute = require("./routes/contactRoute")
const adminRoute = require("./routes/adminRoute")
const getAllContactRoute = require("./routes/getAllContactRoute");
 

//middleware for error
app.use("/api/", contactroute);
app.use("/api/", adminRoute);
app.use("/api/", getAllContactRoute);
app.use(errorMiddleware)

app.use(express.static(path.join(__dirname, '../client/build')))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"))
})
module.exports = app;