const express = require("express");
const Contact = require("../Model/Contact");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Routes 1:  create a user using : POST "/api/user_routes/createuser"
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


//Routes 2:  To fetch all Contact Us data : get "/api/user_routes/fetchAllContactUs"
router.get("/fetchAllContactUs", async (req, res) => {
  const fetchContact = await Contact.find();
  res.json(fetchContact);
});


//Routes 3:  To fetch all counts Contact Us  data : get "/api/user_routes/countContact"
router.get("/countContact", async (req, res) => {
  try {
    const countContact = await Contact.find().countDocuments();
    console.log(countContact);
    res.json(countContact);
  } catch (error) {
    console.log(error);
  }
});


// ROUTE 4: Delete an existing Contacts  using: DELETE "/api/user_routes/deleteContact". 
router.delete("/deleteContact/:id", async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let deleteContact = await Contact.findById(req.params.id);
    if (!deleteContact) {
      return res.status(404).send("Not Found");
    }

    deleteContact = await Contact.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", Contact: Contact });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});



module.exports = router;