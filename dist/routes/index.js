import { Router } from "express";
import moviesRouter from "./moviesRouter.js";
import reviewsRouter from "./reviewsRouter.js";
var router = Router();
router.use(reviewsRouter);
router.use(moviesRouter);
export default router;
