const express = require("express");
const router = express.Router();
const Form = require("../models/formInput");

router.post("/forms", async (req, res) => {
  try {
    const savedForm = await Form.saveForm(req.body);
    res.status(201).json({
      success: true,
      data: savedForm,
      message: "Form saved successfully",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
});

// / GET - retrieve all forms
router.get("/forms", async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 }); // latest first
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
