import joi from 'joi';

const moviesSchema = joi.object({
    name: joi.string().required(),
    genre: joi.string().required()
});

export default moviesSchema;