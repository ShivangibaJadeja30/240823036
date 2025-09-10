// const mongoose=require("mongoose");

// const songSchema=new mongoose.Schema({
//     title:String,
//     name:String,
//     category:String,
//     url:String,
//     year:Number,
// });

// const Songmodel=mongoose.model("Song",songSchema);
// module.exports=Songmodel;
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  url: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Song", songSchema);
