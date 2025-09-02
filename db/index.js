const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://jadejashivangiba2_db_user:Shivi_3006@nodecluster.uei0qcb.mongodb.net/?retryWrites=true&w=majority&appName=nodecluster",{

});

const studSchema=new mongoose.Schema({
    name:String,
    department:String,
    enroll:Number,
});

const Stud=mongoose.model("Stud",studSchema);
console.log("Model created successfully");

// const stud=new Stud({
//     name:"Shree",
//     department:"CS and IT",
//     enroll:90,
// });
// const stud=new Stud({
//     name:"Khushi",
//     department:"CS and IT",
//     enroll:47,
// });

stud
    .save().then(()=>{
        console.log("Student saved....");
    }).catch((error)=>{
        console.log("Error");
    });





