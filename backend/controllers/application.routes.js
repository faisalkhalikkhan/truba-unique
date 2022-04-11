const { response } = require("express");
const express = require("express");
const router = express.Router();
const Application = require("../models/application.model");

router.post("/apply", (req, res) => {
  const newApplication = new Application(req.body);
  newApplication
    .save()
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(500).json(error.message));
});
router.get('get',(req,res) => {
    Application.find()
    .then((response) => res.status(200).json(response))
    .catch((error) => res.status(500).json(error.message));
})
module.exports = router;
