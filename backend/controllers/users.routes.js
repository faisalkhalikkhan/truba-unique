const router = require("express").Router();
const User = require("../models/users.model");
const TeacherDetails = require("../models/teacher.model")
const StudentDetails = require("../models/student.model")
const StudentAccounts = require("../models/student.accounts.model");
const CreateError = require('http-errors')


router.get("/get-all-users",(req,res)=>{
    User.find()
    .then((response) => {
        res.status(201).json(response);
    })
    .catch((err) => res.status(501).json(err.message));
})
router.post("/all-users/:adminId", (req, res) => {
    const adminId = req.params.adminId;
    User.find({ adminId: adminId })
        .then((response) => {
            res.status(201).json(response);
        })
        .catch((err) => res.status(501).json(err.message));
});

router.post("/user/:id", (req, res) => {
    const id = req.params.id;
    User.find({ "_id": id })
        .then((response) => {
            res.status(201).json(response);
        })
        .catch((err) => res.status(501).json(err.message));
});

router.post("/add-user", async (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;
    const picture = req.body.picture;
    const adminId = req.session.adminId;
    const body = {
        name: name,
        username: username,
        password: password,
        role: role,
        picture : picture,
        adminId: adminId,
    };
    console.log(body);
    const newUser = new User(body);
    try{
        await newUser.save();
        if(newUser.role == "student"){
            const student = new StudentDetails({
                studentId: newUser.id 
            })
            const studentAccount = new StudentAccounts({
                studentId: newUser.id 
            })
            student.save();
            studentAccount.save();
        }
        else if(newUser.role == "teacher"){
            const teacher = new TeacherDetails({
                teacherId: newUser.id 
            })
            teacher.save();
        }
        res.status(201).json(newUser);
    }
    catch{
        const duplicate = {
            "error": "Duplicate Record or Database exception"
        }
        res.status(501).json(duplicate);
    }
});

router.delete("/delete-user/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    User.findByIdAndDelete(id)
        .then((response) => {
            res.status(201).json("Maa chod deye bhaiyaji");
        })
        .catch((err) => res.status(501).json(err.message));
});

router.put("/update-user/:id", (req, res) => {
    const id = req.params.id;
    const body = {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        adminId: req.session.adminId,
        picture : req.body.picture
    };

    // const user = new user(body);
    User.findByIdAndUpdate(id, body)
        .then((response) => res.status(201).json(response))
        .catch((err) => res.status(501).json(err.message));
});

//login student and teacher
router.post('/auth/v1/user',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    User.find({
        username: username,
        password: password
    }).then(response => {
        if(response) {
            if(response.role === 'admin'){
                req.session.adminID = response[0]._id
                console.log("admin id > ",req.session.studentId);
            }
            else if(response.role === 'teacher'){
                req.session.teacherId = response[0]._id;
                console.log("teacher id > ",req.session.studentId);
            }
            else{
                req.session.studentId = response[0]._id;
                console.log("student id > ",req.session.studentId);
            }
            res.status(201).json(response)
            
        }
    })
    .catch(err => res.status(501).json(err.message))
})

module.exports = router;
