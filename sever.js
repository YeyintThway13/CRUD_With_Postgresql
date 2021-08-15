const express = require("express");
const helmet = require("helmet");
const { sequelize } = require("./models");
const userRoutes = require("./routes/UserRoutes");
const postRoutes = require("./routes/PostRoutes");

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

// app.use((req, res) => {
//   res.status(404).send("404 : Page not found");
// });

sequelize.authenticate().then(() =>
  app.listen(5000, (req, res) => {
    console.log("Db is connected and sever is up and running on port 5000");
  })
);
