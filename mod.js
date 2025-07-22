const path =require("path");
console.log("full length : ",path.resolve(__dirname,"home.txt"));


const moment = require("moment");
console.log("Date : ",moment().format("DD-MM-YYYY")+"\nTime : "+moment().format("HH:mm:ss"));


const font=require("lodash");
let a="hiii this";
console.log("Result : ",font.capitalize(a));
console.log("Result : ",font.capitalize("shree"));

// method 1
// const file = require("fs");
// file.writeFile("home.txt","Welcome! This is my home page.",(err)=>
//     {
//         if(err) throw err;
//     console.log("File saved");
//     });



// method 2
// const file = require("fs");
// let b="MCA";
// file.writeFile("home.txt",b,(err)=>
//     {
//         if(err) throw err;
//     console.log("File saved");
//     });


// const file = require("fs");
// file.readFile("home.txt","utf8",(err,data)=>{
//     if(err) throw err;
//     console.log("Content : ",data);
// });









