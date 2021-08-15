"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Post }) {
      this.hasMany(Post, { foreignKey: "userId", as: "posts" });
    }

    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
          notNull: { msg: "User must have an email" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validator: {
          notEmail: { msg: "Must be a valid email" },
          notNull: { msg: "User must have an email" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: {
          notNull: { msg: "User must have an email" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
