const express = require("express");
const {
  createUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");

const router = express.Router();

router.post("/create", createUser);

router.get("/", getAllUsers);

router.get("/:uuid", getSingleUser);

router.delete("/:uuid", deleteUser);

router.put("/:uuid", updateUser);

module.exports = router;
