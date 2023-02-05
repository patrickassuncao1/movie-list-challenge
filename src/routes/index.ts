import { Router } from "express";
import multer from "multer";

import { multerConfig } from "../config/multer";
import { CreateMovieController } from "../controller/MovieController/CreateMovieController";
import { FindManyMoviesController } from "../controller/MovieController/FindManyMoviesController";
import { validationMiddleware } from "../middleware/validationMiddleware";
import { createMovieSchema } from "../utils/validations";

const routes = Router();

const createMovieController = new CreateMovieController();
const findManyMovieController = new FindManyMoviesController();

routes.post("/movie/create",
    multer(multerConfig).single("file"),
    validationMiddleware(createMovieSchema),
    createMovieController.handle
);

routes.get("/movie/find-many", findManyMovieController.handle);

export { routes };