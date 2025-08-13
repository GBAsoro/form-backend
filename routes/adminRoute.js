const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const adminController = require("../controllers/adminController");

// Admin Login
router.post("/login", adminController);

module.exports = router;
