const { User, Post } = require("../models");

exports.createPost = async (req, res) => {
  const { userUuid, body } = req.body;

  try {
    const user = await User.findOne({ where: { uuid: userUuid } });

    const post = await Post.create({ body, userId: user.id });

    res.send(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: "user"});

    res.send(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


