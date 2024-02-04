const express = require("express");
const poiController = require("../controllers/poiController");

const poiRoutes = express.Router();

poiRoutes.route("/").post(poiController.createPOI).get(poiController.getPOIs);
poiRoutes
  .route("/:_id")
  //   .get(userController.getUser)
  .patch(poiController.updatePOI)
  .delete(poiController.deletePOI);

module.exports = poiRoutes;
