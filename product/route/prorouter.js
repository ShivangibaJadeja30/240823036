const express = require("express");
const Router = express.Router();
const procontroller=require("../controller/procontroller");
const{cValidator,validate}=require("../validation/provalidator");

Router.get("/index",procontroller.index);
Router.get("/show/:id",procontroller.show);

Router.post("/store", (req, res, next) => {
  const result = validate(cValidator, req.body);

  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }

  procontroller.store(req, res, next);
});