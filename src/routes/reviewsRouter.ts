import { Router } from "express";
import { getAllReviews, insertReview } from "../controllers/reviewController.js";
import { validateSchema } from "../middleware/validationSchemaMiddleware.js";
import reviewSchema from "../schemas/reviewSchema.js";

const reviewsRouter = Router();

reviewsRouter.post('/reviews', validateSchema(reviewSchema), insertReview);
reviewsRouter.get('/reviews', getAllReviews);

export default reviewsRouter;