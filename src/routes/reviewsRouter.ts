import { Router } from "express";
import { deleteReview, getAllReviews, getAllTrendingReviews, insertReview, updateReviews } from "../controllers/reviewController.js";
import { validateSchema } from "../middleware/validationSchemaMiddleware.js";
import reviewSchema from "../schemas/reviewSchema.js";

const reviewsRouter = Router();

reviewsRouter.post('/reviews', validateSchema(reviewSchema), insertReview);
reviewsRouter.get('/reviews', getAllReviews);
reviewsRouter.delete('/reviews/:id', deleteReview);
reviewsRouter.put('/reviews/:id', updateReviews);
reviewsRouter.get('/reviews/trending', getAllTrendingReviews);


export default reviewsRouter;