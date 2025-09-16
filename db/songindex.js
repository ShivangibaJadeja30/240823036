// const mongoose=require("mongoose");

// mongoose.connect("mongodb+srv://jadejashivangiba2_db_user:Shivi_3006@nodecluster.uei0qcb.mongodb.net/song",{

// });
// const express = require("express");

// const sroute = require("./Router/sroute");
// const app = express();
// const PORT = 80;
// app.use(express.json());

// app.use("/song", sroute);

// app.listen(PORT, () => {
//   console.log("server is running : 127.0.0.1" + PORT);
// });

const mongoose = require("mongoose");
const express = require("express");

mongoose.connect(
  "mongodb+srv://jadejashivangiba2_db_user:Shivi_3006@nodecluster.uei0qcb.mongodb.net/sssong",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const sroute = require("./sroute");
const app = express();
const PORT = 80;

app.use(express.json());
app.use("/song", sroute);

app.listen(PORT, () => {
  console.log("server is running localhost:" + PORT);
});
