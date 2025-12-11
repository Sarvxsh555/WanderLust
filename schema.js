const Joi = require('joi');

module.exports=Joi.object({
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
    }).required()
});