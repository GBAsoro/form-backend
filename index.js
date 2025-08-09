const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./db/dbConnect");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const formRoute = require("./routes/formRoute");
const adminRoute = require("./routes/adminRoute");
const Admin = require("./models/admin");

app.get("/", (req, res) => {
  res.send("App Running");
});

app.use("/api/form", formRoute);
app.use("/api/admin", adminRoute);

// // Created an Admin Username and password
// mongoose.connect(process.env.DB_URI).then(async () => {
//   const admin = new Admin({
//     username: "controLEO",
//     password: "controlLEOADMIN2025#",
//   });
//   await admin.save();
//   console.log("Admin created");
//   process.exit();
// });

// Server and DB
const port = process.env.PORT;
const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.log("Error");
  }
};

start();
