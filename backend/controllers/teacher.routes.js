const router = require("express").Router();
const Teacher = require("../models/teacher.model");
const Users = require("../models/users.model");

//update teacher
router.post("/update-teacher/:id", (req, res) => {
  const id = req.params.id;

  Teacher.findOneAndUpdate(
    { teacherId: id },
    {
      name: req.body.name,
      picture: req.body.picture,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      alternativePhone: req.body.alternativePhone,
      subjects: req.body.subjects,
      documents: req.body.documents,
    }
  )
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(501).json(err.message));
});
router.get("/get-teacher/:id", (req, res) => {
  const id = req.params.id;

  Teacher.find({ teacherId: id })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(501).json(err.message));
});

router.get("/get-teachers", (req, res) => {
  Teacher.find()
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(501).json(err.message));
});

module.exports = router;
