import { createMovieType } from "../../@types/models";
import { prismaClient } from "../../config/database/prismaClient";
import { envConf } from "../../config/env";

class CreateMovieRepository {

    async execute(file: Express.Multer.File, movie: createMovieType) {

        const { filename, originalname, size } = file;

        const { author, description, duration, releaseYear, title } = movie;

        const newMovie = await prismaClient.movie.create({
            data: {
                author: author,
                description: description,
                duration: Number(duration),
                releaseYear: Number(releaseYear),
                title: title
            }
        });

        const url = `${envConf.APP_URL}/files/${filename}`;
        

        await prismaClient.movieImage.create({
            data: {
                fileName: filename,
                name: originalname,
                size: size,
                url: url,
                movieId: newMovie.id
            },
            select: {
                id: true
            }
        });

        return newMovie;
    }

}

export { CreateMovieRepository };