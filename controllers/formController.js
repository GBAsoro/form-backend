const express = require("express");
const Form = require("../models/formInput");

const formController = async (req, res) => {
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
};

const getSubmissions = async (req, res) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 }); // latest first
    res.json(forms);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { formController, getSubmissions };
