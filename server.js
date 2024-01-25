const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.ENV" });
console.log(process.env);
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
