const mongoose=require('mongoose');
const proSchema=new mongoose.Schema({
    name:String,
    category:String,
    price:Number,
});

module.exports=mongoose.model("Product",proSchema);