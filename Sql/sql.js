const express=require("express");
const app=express();
const seq=require("sequalize");
const db=new seq("sql","root","",{host:"localhost",dialect:"mysql"});
db.authenticate()
    .then(()=>{
        console.log("Success....");
    })
    .catch((err)=>{
        console.error("Error...",error);
    });

// const {Sequalize}=require('sequelize');
// const sequelize = new Sequelize("node","root","",
//     {   host:'localhost',
//         dialect:'mysql'
    
//     })
// sequelize.authenticate()
//     .then(()=>{
//     console.log("connected");
//     })
//     .catch((err)=>{
//     console.error("Error",err);
// });
// module.exports=sequelize;

// const {Sequelize}= require('sequelize');

// const sequelize = new Sequelize('node',"root","",{
//     host:'localhost',
//     dialect:'mysql'
// })

// sequelize.authenticate()
//     .then(()=>{
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err=>{
//         console.error('Unable to connect to the database:', err);
//     });

// module.exports= sequelize;