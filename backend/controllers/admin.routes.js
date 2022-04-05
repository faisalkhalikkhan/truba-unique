// const session = require
const router = require("express").Router();

const Admin = require("../models/admin.model");

router.get("/", (req, res) => {
  res.send(":)");
});

// for register new Admin
router.post("/auth/v1/add-admin", async (req, res) => {
  try {
    const body = req.body;
    const newAdmin = new Admin(body);
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(409).json(error.message);
  }
});

// for Login Admin
router.post("/auth/v1/admin", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({
      username: username,
      password: password,
    })
      .then((response) => {
        req.session.adminId = response.id;
        console.log(req.session.adminId);
        res.status(201).json(response);
      })
      .catch((error) => res.status(500).json(error.message));
  } catch (error) {
    res.status(409).json(error.message);
  }
});

// get image
router.post("/get-image/v1", (req, res) => {
  console.log(req.body);
  res.send("heelo");
});

module.exports = router;
