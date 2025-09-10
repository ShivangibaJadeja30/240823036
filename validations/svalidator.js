// const Joi = require("joi");

// exports.cValidator = Joi.object({
//     title: Joi.string().min(3).max(30).required(),
//     artist: Joi.string().min(3).max(50).required(),
//     album: Joi.string().min(3).max(50).required(),
//     photo: Joi.string().required(),  // likely a URL to a photo/image
//     year: Joi.number().min(1900).max(new Date().getFullYear()).required(),
//   });
  

// exports.validate = (schema, data) => {
//   const { error, value } = schema.validate(data, { abortEarly: false });
//   if (error) {
//     return {
//       success: false,
//       errors: error.details.map((err) => ({
//         field: err.path[0],
//         message: err.message,
//       })),
//     };
//   }
//   return { success: true, value };
// };

const Joi = require("joi");

exports.cValidator = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  name: Joi.string().min(3).max(50).required(),
  category: Joi.string().min(3).max(50).required(),
  url: Joi.string().uri().required(),
  year: Joi.number().min(1900).max(new Date().getFullYear()).required(),
});

exports.validate = (schema, data) => {
  const { error, value } = schema.validate(data, { abortEarly: false });
  if (error) {
    return {
      success: false,
      errors: error.details.map((err) => ({
        field: err.path[0],
        message: err.message,
      })),
    };
  }
  return { success: true, value };
};
