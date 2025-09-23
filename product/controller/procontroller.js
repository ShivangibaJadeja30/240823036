// const Product=require("../model/product");
const Product=require("../model/product");
const mongoose=require("mongoose");

exports.index=async(req,res)=>{
   try {
    const data=await Product.find();

    res.status(200).json({data:data})
   } catch (error) {
    console.error(error.message);
   }
    
};

exports.show=(req,res)=>{
    Product.findById(req.params.id)
    .then((product)=>{
        console.log("Product you want is : ");
        res.send({message:"Product is  : ",data:product});
    })
    .catch((error)=>{
        console.error("Error ....",error);
    });    
};


exports.store=(req,res)=>{
    const newProduct=new Product({
        name:req.body.name,
        category:req.body.category,
        price:req.body.price,
    });
newProduct
    .save()
    .then(()=>{
        console.log("New Product added : ");
    })
    .catch((error)=>{
        console.error("Error....",error);
    });
    res.send({ message: "Data stored successfully", data:newProduct });
};
