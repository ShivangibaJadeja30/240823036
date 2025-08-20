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

const validate = (req, res, next) => {
    const { error } = exports.createvalidator.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }    
    next();
};  
exports.validate = validate;
exports.updatevalidate = (req, res, next) => {
    const { error } = exports.updatevalidator.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};  
