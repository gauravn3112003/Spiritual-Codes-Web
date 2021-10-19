const express = require("express");
const createPost = require("../Model/Post");
const router = express.Router();
const { body, validationResult } = require("express-validator");

//Routes 1:  To create blog post data : POST "/api/createPost/create_post"
router.post(
  "/create_post",
  [
    body("title", "Enter valid name").isLength({ min: 3 }),
    body("image", "Enter a valid Image Link"),
    body("tag", "Enter valid tag").isLength({ min: 2 }),
    body("description", "description must be 3 charater").isLength({ min: 3 }),
    body("mainData", "mainData must be 3 charater").isLength({ min: 3 }),
  ],
  async (req, res) => {
    //if theree are errors , return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // to create database table
      const { title, image, tag, description, mainData } = req.body;
      const create = await createPost.create({
        title, image, tag, description, mainData
      });
      res.status(201).send(create);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);

//Routes 2:  To fetch all blog post data : get "/api/createPost/fetchAllBlog"
router.get(
  "/fetchAllBlog",
  async (req, res) => {
    const posts = await createPost.find();
    res.json(posts);
  }
)
module.exports = router;