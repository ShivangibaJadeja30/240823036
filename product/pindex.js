const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb+srv://jadejashivangiba2_db_user:Shivi_3006@nodecluster.uei0qcb.mongodb.net/Product");


const proRoute = require("./route/prorouter");
const app = express();
const PORT = 80;

app.use(express.json());
app.use("/product",proRoute);

app.listen(PORT, () => {
  console.log("server is running localhost:" + PORT);
});