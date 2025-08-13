const express = require("express");
const router = express.Router();
const Form = require("../models/formInput");
const {
  formController,
  getSubmissions,
} = require("../controllers/formController");

const authMiddleware = require("../middlewear/authMiddlewear");

router.post("/forms", formController);
router.get("/dashboard", authMiddleware, getSubmissions);

module.exports = router;
