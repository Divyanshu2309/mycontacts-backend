const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbconnection");

connectDb();  
const app = express()

const port = process.env.PORT || 5005;

//middleware app.use()
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`server running on port ${port}`);
});