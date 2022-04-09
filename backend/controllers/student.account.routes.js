const router = require("express").Router();
const StudentAccounts = require("../models/student.accounts.model");

//update student accounts
router.post("/update/:id", async (req, res) => {
  let totalFee =
    parseInt(req.body.collegeTuitionFees) +
    parseInt(req.body.collegeBusFees) +
    parseInt(req.body.developmentFees) +
    parseInt(req.body.miscellaneousFees);
  await StudentAccounts.findOneAndUpdate(
    { studentId: req.params.id },
    {
      totalFees: totalFee,
      paidAmount: req.body.paidAmount,
      libraryFine: req.body.libraryFine,
      otherFine: req.body.otherFine,
      collegeTuitionFees: req.body.collegeTuitionFees,
      collegeBusFees: req.body.collegeBusFees,
      developmentFees: req.body.developmentFees,
      miscellaneousFees: req.body.miscellaneousFees,
      conditionOfAdmission: req.body.conditionOfAdmission,
    }
  )
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(501).json(err.message));
});

router.post("/add-library-fine/:id", async (req, res) => {
  await StudentAccounts.findOneAndUpdate(
    { studentId: req.params.id },
    {
      libraryFine: req.body.libraryFine,
    }
  )
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(501).json(err.message));
});

router.get("/details/:id", async (req, res) => {
  await StudentAccounts.findOne({ studentId: req.params.id })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(501).json(err.message));
});
router.get("/total-fine/:id", async (req, res) => {
  await StudentAccounts.findOne({ studentId: req.params.id })
    .then((response) => {
      let total = response.libraryFine + response.otherFine;
      res.status(201).json({
        "total fine": total,
        libraryFine: response.libraryFine,
        otherFine: response.otherFine,
      });
    })
    .catch((err) => res.status(501).json(err.message));
});
module.exports = router;
