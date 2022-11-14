import joi from 'joi';

const reviewSchema = joi.object({
    userName: joi.string().required(),
    movieId: joi.number().required(),
    review: joi.string().required()
});

export default reviewSchema;