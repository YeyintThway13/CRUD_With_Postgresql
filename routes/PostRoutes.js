const express = require("express");
const { createPost, getAllPosts } = require("../controllers/postControllers");

const router = express.Router();

router.post("/", createPost);

router.get("/", getAllPosts);

module.exports = router;
