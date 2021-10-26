const express = require("express");
const ConnectUs = require("../Model/ConnectUs");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Routes 1:  to add E-mail Id  using : POST "/api/connect-us-routes/connectUs"
router.post(
  "/connectUs",
  [body("email", "E-mail is already exist").isEmail()],
  async (req, res) => {
    //if theree are errors , return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // check wheather the user with this email is already
      let Connect = await ConnectUs.findOne({ email: req.body.email });
      if (Connect) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email already exists" });
      }

      const { email } = req.body;
      const create = await ConnectUs.create({
        email,
      });
      res.status(201).send(create);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
//Routes 2:  To fetch all Connect Us  data : get "/api/connect-us-routes/fetchAllConnect"
router.get("/fetchAllConnect", async (req, res) => {
  const connect = await ConnectUs.find();
  res.json(connect);
});

//Routes 3:  To fetch all counts Connect Us  data : get "/api/connect-us-routes/connectCounts"
router.get("/connectCounts", async (req, res) => {
  try {
    const countConnect = await ConnectUs.find().countDocuments();
    console.log(countConnect);
    res.json(countConnect);
  } catch (error) {
    console.log(error);
  }
});

// ROUTE 4: Delete an existing connect us  using: DELETE "/api/connect-us-routes/deleteConnect". Login required
router.delete("/deleteConnect/:id", async (req, res) => {
  try {
    // Find the note to be delete and delete it
    let connect = await ConnectUs.findById(req.params.id);
    if (!connect) {
      return res.status(404).send("Not Found");
    }

    connect = await ConnectUs.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", ConnectUs:ConnectUs});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
