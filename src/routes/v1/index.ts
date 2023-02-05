import { Router } from "express";
import multer from "multer";

import { multerConfig } from "../../config/multer";
import { CreateMovieController } from "../../controller/v1/MovieController/CreateMovieController";
import { validationMiddleware } from "../../middleware/validationMiddleware";
import { createMovieSchema } from "../../utils/validations";

const routes = Router();

const createMovieController = new CreateMovieController();

routes.post("/movie/create",
    multer(multerConfig).single("file"),
    validationMiddleware(createMovieSchema),
    createMovieController.handle
);

export { routes };