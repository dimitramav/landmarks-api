const express = require("express");
const userController = require("../controllers/userController");

const userRoutes = express.Router();

userRoutes
  .route("/")
  .post(userController.checkAge, userController.createUser)
  .get(userController.getUsers);

userRoutes
  .route("/:email")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRoutes;
