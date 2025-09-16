const mongoose=require('mongoose');
const proSchema=new mongoose.Schema({
    name:String,
    category:String,
    price:Number,
});

module.exoports=mongoose.model("Product",proSchema);