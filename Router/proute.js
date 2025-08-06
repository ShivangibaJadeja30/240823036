const express=require("express");
const Route=express.Router();
const Pcontroller = require("../Controller/Pcontroller");

Route.get("/index",Pcontroller.index);
Route.get("/show/:id",Pcontroller.show);
Route.post("/store",Pcontroller.store);
Route.put("/update:id",Pcontroller.update);
Route.delete("/delete:id",Pcontroller.destroy);

module.exports=Route;