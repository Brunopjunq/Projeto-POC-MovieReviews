import { Router } from "express";
import moviesRouter from "./moviesRouter.js";
import reviewsRouter from "./reviewsRouter.js";

const router = Router();

router.use(reviewsRouter);
router.use(moviesRouter);

export default router;