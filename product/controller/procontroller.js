const Product=require("../model/product");

exports.index=(req,res)=>{
    Product.find()
    .then((allproducts)=>{
        console.log("All Products : ",allproducts);
        res.send({message:"Products are : ",data:allproducts});
    })
    .catch((error)=>{
        console.error("Error retrieving products.....",error);
    });
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
