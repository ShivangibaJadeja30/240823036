const express=require("express");
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("All students");
});

app.get("/show/:id",(req,res)=>{
    res.send(`Show student ID : ${req.params.id}`);
});

app.post("/store",(req,res)=>{
    res.send("create students");
});

app.put("/update/:id",(req,res)=>{
    res.send("update students");
});

app.delete("/delete/:id",(req,res)=>{
    res.send("delete students");
});

app.listen(3602,()=>{
    console.log("Server running...at http://localhost:3602");
});