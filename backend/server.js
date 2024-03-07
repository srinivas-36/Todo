const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/ToDoRoutes.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((err) => {
    console.log("Error connected to mongoose" + err);
  });

app.use(routes);
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
