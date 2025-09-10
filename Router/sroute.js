// const express = require("express");
// const Router = express.Router();
// const scontoller = require("../Controller/Scontroller");
// const {
//   cValidator,
//   validate,
// } = require("../validations/svalidator");

// Router.get("/index", scontoller.index);
// Router.get("/show/:id", scontoller.show);
// Router.post("/store", (req, res, next) => {
//   const result = validate(cValidator, req.body);

//   if (!result.success) {
//     return res.status(400).json({ status: "error", errors: result.errors });
//   }

//   scontoller.store(req, res, next);
// });
// // Router.put("/update/:id", scontoller.update);
// // Router.delete("/delete/:id", scontoller.delete);

// module.exports = Router;


const express = require("express");
const Router = express.Router();
const scontroller = require("./Scontroller");
const { cValidator, validate } = require("./svalidator");

Router.get("/index", scontroller.index);
Router.get("/show/:id", scontroller.show);

Router.post("/store", (req, res, next) => {
  const result = validate(cValidator, req.body);

  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }

  scontroller.store(req, res, next);
});

// Uncomment and implement if needed
// Router.put("/update/:id", scontroller.update);
// Router.delete("/delete/:id", scontroller.delete);

module.exports = Router;
