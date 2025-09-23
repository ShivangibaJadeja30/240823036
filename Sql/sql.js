const express=require("express");
const app=

const seq=require("sequalize");
const db=new seq("sql","root","",{host:"localhost",dialect:"mysql"});
db.authenticate()
    .then(()=>{
        console.log("Success....");
    })
    .catch((err)=>{
        console.error("Error...",error);
    });


