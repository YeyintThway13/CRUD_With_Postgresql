"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validator: {
          notNull: { msg: "User must have an email" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validator: {
          isEmail: { msg: "Must be a valid email" },
          notNull: { msg: "User must have an email" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        validator: {
          notNull: { msg: "User must have an email" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
