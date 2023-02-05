import { Prisma } from "@prisma/client";
import { PaginationObjectType } from "../../@types/models";
import { prismaClient } from "../../config/database/prismaClient";

class FindManyMoviesRepository {

    async execute(search: string, page: number) {
        
        const take = 12;
        const skip = (page - 1) * take;

        const consultWhere = {
            title: {
                contains: search
            }
        } as Prisma.MovieWhereInput

        const countMovies = await prismaClient.movie.count({
            where: consultWhere
        });

        const movies = await prismaClient.movie.findMany({
            where: consultWhere,
            skip: skip,
            take: take,
            select: {
                id: true,
                releaseYear: true,
                title: true,
                MovieImage: {
                    select: {
                        id: true,
                        url: true
                    }
                }
            },
            orderBy: {
                created_ad: "desc"
            }
        });

        const division = countMovies / take;

        const customResponse = {
            message: "succesfull",
            data: movies,
            meta: {
                currentPage: page,
                total: countMovies,
                numberPages: (countMovies % take) === 0 ? division : Math.trunc(division) + 1,
                perPage: take,
            }
        } as PaginationObjectType


        return customResponse;

    }

}

export { FindManyMoviesRepository }