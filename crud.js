const express = require("express");
const proute=require("./Router/proute");
const app=express();
const PORT=80;
app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("Hello Everyone Welcome to Mca !");
app.use("/product",proute);

app.listen(PORT,()=>{
    console.log(`Server running at....... http://localhost:${PORT}/`);
});