const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const fs = require("fs");

const directoryPath = "uploads";

// Check if the directory already exists
if (!fs.existsSync(directoryPath)) {
  // If not, create the directory
  fs.mkdirSync(directoryPath);
  console.log("Directory created successfully.");
} else {
  console.log("Directory already exists.");
}

dotenv.config({ path: "./config.ENV" });
mongoose
  .connect(
    `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster-mpsp2322.ukqxd9z.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Node API app is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", function (req, res) {
  res.send("I am running");
});
