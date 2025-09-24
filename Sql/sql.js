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


const sequelize=require('sequelize');
const db=new sequelize("node");

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