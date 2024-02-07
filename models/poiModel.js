const mongoose = require("mongoose");

const poiSchema = mongoose.Schema(
  {
    name: String,
    category: String,
    address: String,
    longitude: Number,
    latitude: Number,
    image: {
      type: String,
      required: false,
    },
  },
  { collection: "POIs" }
);

const POI = mongoose.model("POI", poiSchema);

module.exports = POI;
