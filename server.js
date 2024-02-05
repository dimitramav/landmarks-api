const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const fs = require("fs");

// Define the directory path for file uploads
const directoryPath = "uploads";

// Check if the directory already exists
if (!fs.existsSync(directoryPath)) {
  // If not, create the directory
  fs.mkdirSync(directoryPath);
  console.log("Directory created successfully.");
} else {
  console.log("Directory already exists.");
}

// Load environment variables from config file
dotenv.config({ path: "./config.ENV" });

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster-mpsp2322.ukqxd9z.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to MongoDB");
    // Start the Node API app and listen on the specified port
    app.listen(process.env.PORT, () => {
      console.log(`Node API app is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Define a simple route to check if the server is running
app.get("/", function (req, res) {
  res.send("I am running");
});
