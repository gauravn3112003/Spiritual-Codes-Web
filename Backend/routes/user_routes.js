const express = require("express");
const Contact = require("../Model/Contact");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Routes 1:  create a user using : POST "/api/adduser/createuser"
router.post("/createuser",[
    body("name", "Enter valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("number", "Enter valid number").isLength({ min: 10 }),
    body("message", "Message must be 3 charater").isLength({ min: 3 }),
 
  ] ,async (req, res) => {
    
    //if theree are errors , return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
    const { name , email, number, message  } = req.body;
    const create = await Contact.create({
        name, email,number,message
    })
    res.status(201).send(create);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;