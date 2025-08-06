exports.index=(req,res)=>{
    res.send("Welcome to our shop !");
}

exports.show=(req,res)=>{
    res.send(`Product description is : ${req.params.id}`);
}

exports.store=(req,res)=>{
    res.send(`Record inserted : ${req.body.name},${req.body.catagory},${req.body.price}`);
}

exports.update=(req,res)=>{
    res.send(`Updated record successfully ID : ${req.params.id}, Pname : ${req.body.name} \nCatagory : ${req.body.catagory} \nPrice : ${req.body.price}`);
}

exports.delete=(req,res)=>{
    res.send(`Record deleted of ID : ${req.params.id}\n`);
}