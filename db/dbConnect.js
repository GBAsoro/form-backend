const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Error");
  }
};

module.exports = connectDB;
