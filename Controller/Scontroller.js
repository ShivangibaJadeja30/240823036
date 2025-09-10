// const Song=require("../model/song");


// exports.index=(req,res)=>{
//     Song.find()
//     .then((allSongs)=>{
//         console.log("All Songs......",allSongs);
//         res.send({message:"Songs are : ",data:allSongs});
//     })
//     .catch((error)=>{
//         console.error("error retrieving songs",error);
//     });
// };

// exports.show=(req,res)=>{
//     // Song.find({_id:req.params.id})
//     Song.findById(req.params.id)
//     .then((song)=>{
//         console.log("Song you want is : ");
//         res.send({messege:"Song is  : ",data:song});
//     })
//     .catch((error)=>{
//         console.error("Error ....",error);
//     });    
// };


// exports.store=(req,res)=>{
//     const newSong=new Song({
//         title:req.body.title,
//         name:req.body.name,
//         category:req.body.category,
//         url:req.body.url,
//         year:req.body.year,
//     });
// newSong
//     .save()
//     .then(()=>{
//         console.log("New song added : ");
//     })
//     .catch((error)=>{
//         console.error("Error....",error);
//     });
//     res.send({ message: "Data stored successfully", data: newSong });
// };

const Song = require("./song");

exports.index = (req, res) => {
  Song.find()
    .then((allSongs) => {
      console.log("All Songs......", allSongs);
      res.send({ message: "Songs are : ", data: allSongs });
    })
    .catch((error) => {
      console.error("error retrieving songs", error);
      res.status(500).send({ status: "error", message: "Internal server error" });
    });
};

exports.show = (req, res) => {
  Song.findById(req.params.id)
    .then((song) => {
      if (!song) {
        return res.status(404).send({ status: "error", message: "Song not found" });
      }
      console.log("Song you want is : ", song);
      res.send({ message: "Song is  : ", data: song });
    })
    .catch((error) => {
      console.error("Error ....", error);
      res.status(500).send({ status: "error", message: "Internal server error" });
    });
};

exports.store = (req, res) => {
  const newSong = new Song({
    title: req.body.title,
    name: req.body.name,
    category: req.body.category,
    url: req.body.url,
    year: req.body.year,
  });

  newSong
    .save()
    .then(() => {
      console.log("New song added : ", newSong);
      res.send({ message: "Data stored successfully", data: newSong });
    })
    .catch((error) => {
      console.error("Error....", error);
      res.status(500).send({ status: "error", message: "Failed to save song" });
    });
};
