const router = require("express").Router();
const Librery = require("../models/library.model");

//add-book
router.post('/add-book',(req,res)=>{
    const name = req.body.name;
    const lastHand = req.body.lastHand;
    const author = req.body.author;
    const idle = req.body.idle;
    const body = {
        name: name,
        lastHand: lastHand,
        author: author,
        idle: idle,
    };
    console.log(body);
    const newBook = new Librery(body);
    newBook.save();
    res.status(201).json(newBook);
})

router.get('/search-book/:name',(req,res)=>{
    const bookname  = req.params.name;
    Librery.find({name : new RegExp(bookname , "i"), idle : true}).then(response =>{
        res.status(201).json(response);
    })    
})

router.get('/search-book-byLastHand/:name',(req,res)=>{
    const bookname  = req.params.name;
    Librery.find({lastHand : new RegExp(bookname , "i")}).then(response =>{
        res.status(201).json(response);
    })    
})

module.exports = router;
