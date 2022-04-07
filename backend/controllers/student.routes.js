const router = require('express').Router()
const Student = require('../models/student.model')
const Users = require('../models/users.model')

//update student 
router.post('/update-student/:id',(req,res)=>{
    const id = req.params.id;

    Student.findOneAndUpdate({ studentId: id },{
        picture: req.body.picture,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        alternativePhone: req.body.alternativePhone,
        teachers: req.body.teachers,
        documents: req.body.documents,
        education: req.body.education
    })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(501).json(err.message));

})

module.exports = router