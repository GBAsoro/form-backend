const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// 🔹 Static method to create & save in one step
FormSchema.statics.saveForm = async function (formData) {
  const form = new this(formData); // "this" refers to the Form model
  return await form.save();
};

module.exports = mongoose.model("Form", FormSchema);
