import { Request, Response } from "express";
import { ResponseMessage } from "../../messages/ResponseMessage";
import { FindFirstMovieRepository } from "../../repository/MovieRepository/FindFirstMovieRepository";

class FindFirstMovieController {
    async handle(request: Request, response: Response) {
        const { movieId } = request.params;

        const repo = new FindFirstMovieRepository();
        const movie = await repo.execute(movieId);

        const responseMessage = new ResponseMessage("Success", movie);

        return response.json(responseMessage);

    }
}

export { FindFirstMovieController }