const joi=require("joi");
exports.createValidator=joi.object({
    Name:joi.string().min(2).max(30).require(),
    Catagory:joi.string().min(2).max(30).require(),
    Price:joi.num().min(1).require()
});

exports.updateValidator=joi.object({
    Name:joi.string().min(2).max(30).require(),
    Catagory:joi.string().min(2).max(30).require(),
    Price:joi.num().min(1).require()
});


