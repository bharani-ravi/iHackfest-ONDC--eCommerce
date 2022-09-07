require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const app = express();

app.use(express.json());

app.use("/api/v1/", userRoutes);
app.use("/api/v1/product", productRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening to the port ${process.env.PORT}`);
    });
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
