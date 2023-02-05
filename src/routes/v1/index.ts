import { Router } from "express";
import { CreateMovieController } from "../../controller/v1/MovieController/CreateMovieController";

const routes = Router();

const createMovieController = new CreateMovieController();

routes.post("/movie/create", createMovieController.handle);

export { routes };