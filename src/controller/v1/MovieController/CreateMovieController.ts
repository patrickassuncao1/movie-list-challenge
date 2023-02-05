import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { CreateMovieRepository } from "../../../repository/v1/MovieRepository/CreateMovieRepository";

class CreateMovieController {

    async handle(request: Request, response: Response) {

        const { author, description, duration, releaseYear, title } = request.body;
        const file = request.file as Express.Multer.File;

        if (!file) throw new AppError("File is required");

        const repo = new CreateMovieRepository();
        
        const movie = await repo.execute(file, {
            author,
            description,
            duration,
            releaseYear,
            title
        });
        
        
        return response.json(movie);
    }

}

export { CreateMovieController };