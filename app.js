const express = require("express");

const userRouter = require("./routes/userRoutes");
const poiRouter = require("./routes/poiRoutes");

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use("/api/users/", userRouter);
app.use("/api/pois/", poiRouter);

module.exports = app;
