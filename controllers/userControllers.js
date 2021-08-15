const { User, Post } = require("../models");

exports.createUser = async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = await User.create({ name, email, role });
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ order: [["id", "DESC"]] });
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getSingleUser = async (req, res) => {
  const { uuid } = req.params;
  try {
    const user = await User.findOne({ where: { uuid }, include: "posts" });
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteUser = async (req, res) => {
  const { uuid } = req.params;

  try {
    const user = await User.findOne({ where: { uuid } });

    await user.destroy();

    res.send({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateUser = async (req, res) => {
  const { uuid } = req.params;
  const { name, email, role } = req.body;
  try {
    const user = await User.findOne({ where: { uuid } });

    user.name = name;
    user.email = email;
    user.role = role;

    await user.save();

    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
