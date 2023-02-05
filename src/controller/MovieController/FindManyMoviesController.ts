import { Request, Response } from "express";
import { FindManyMoviesRepository } from "../../repository/MovieRepository/FindManyMovieRepository";

class FindManyMoviesController {

    async handle(request: Request, response: Response) {

        const { page, search } = request.query;

        const numberPage = page ? Number(page) : 1;
        const searchTostring = search ? search.toString() : "";

        const repo = new FindManyMoviesRepository();
        const movies = await repo.execute(searchTostring, numberPage);

        return response.json(movies);

    }
}

export { FindManyMoviesController };