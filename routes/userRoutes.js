const express = require("express");
const userController = require("../controllers/userController");
const { validateAge } = require("../middleware/validate");
const userRoutes = express.Router();

userRoutes
  .route("/")
  .post(validateAge, userController.createUser)
  .get(userController.getUsers);

userRoutes
  .route("/:email")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = userRoutes;
