import { prismaClient } from "../../config/database/prismaClient";
import { AppError } from "../../errors/AppError";

class FindFirstMovieRepository {

    async execute(movieId: string) {

        const movie = await prismaClient.movie.findFirst({
            where: {
                id: movieId
            },
            select: {
                id: true,
                author: true,
                description: true,
                duration: true,
                releaseYear: true,
                title: true,
                created_ad: true,
                updated_at: true,
                MovieImage: {
                    select: {
                        id: true,
                        url: true
                    }
                }
            }
        });


        if (!movie) {
            throw new AppError("Not found", 404)
        }

        return movie;

    }

};

export { FindFirstMovieRepository };