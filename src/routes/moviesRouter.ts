import { Router } from "express";
import { getAllMovies, insertMovie } from "../controllers/moviesController.js";
import { validateSchema } from "../middleware/validationSchemaMiddleware.js";
import moviesSchema from "../schemas/moviesSchema.js";

const moviesRouter = Router();

moviesRouter.post('/movies', validateSchema(moviesSchema), insertMovie);
moviesRouter.get('/movies', getAllMovies);

export default moviesRouter;