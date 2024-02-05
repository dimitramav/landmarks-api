const express = require("express");
const poiController = require("../controllers/poiController");
const { upload } = require("../middleware/upload");
const poiRoutes = express.Router();

poiRoutes.route("/").post(poiController.createPOI).get(poiController.getPOIs);
poiRoutes
  .route("/:id")
  .patch(poiController.updatePOI)
  .delete(poiController.deletePOI);

poiRoutes
  .route("/upload/:id")
  .patch(upload.single("image"), poiController.uploadImage);

module.exports = poiRoutes;
