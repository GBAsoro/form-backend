const express = require("express");

const router = express.Router();

router.post("/forms", (req, res) => {
  res.send("Form Sent");
});

module.exports = router;
