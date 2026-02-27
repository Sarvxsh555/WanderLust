const Joi = require('joi');
const { CATEGORY_VALUES } = require("./utils/categories.js");

module.exports.listingSchema=Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),

        image :Joi.object({
        url: Joi.string().uri().allow("", null),
        filename: Joi.string().allow("", null)
        }),
        
        location : Joi.string().required(),
        price : Joi.number().required().min(0),
        country :  Joi.string().required(),
        category : Joi.string().valid(...CATEGORY_VALUES).required(),
    }).required()
});

module.exports.reviewSchema=Joi.object({
    review : Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required()
    }).required()
});
