import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import { ResponseMessage } from "../../messages/ResponseMessage";
import { CreateMovieRepository } from "../../repository/MovieRepository/CreateMovieRepository";

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

        const responseMessage = new ResponseMessage("Success", movie);

        return response.status(201).json(responseMessage);
    }

}

export { CreateMovieController };