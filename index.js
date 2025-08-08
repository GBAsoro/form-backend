const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./db/dbConnect");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const formRoute = require("./routes/formRoute");

app.get("/", (req, res) => {
  res.send("App Running");
});

app.use("/api/form", formRoute);

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
