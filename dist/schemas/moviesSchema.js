import joi from 'joi';
var moviesSchema = joi.object({
    name: joi.string().required(),
    genre: joi.string().required()
});
export default moviesSchema;
