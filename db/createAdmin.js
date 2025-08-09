const mongoose = require("mongoose");
const Admin = require("../models/admin");

mongoose.connect(process.env.DB_URI).then(async () => {
  const admin = new Admin({
    username: "controLEO",
    password: "controlLEOADMIN2025#",
  });
  await admin.save();
  console.log("Admin created");
  process.exit();
});
