const app = require("./app");
 
const connectDatabase = require("./db/databse")
//confgi
 
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "server/config/config.env" });
  }
 

//connectdatabse 
connectDatabase();

 const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`server is live on http://localhost:${PORT}`) }) 