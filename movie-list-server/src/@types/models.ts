import { Movie } from '@prisma/client';

export type createMovieType = Omit<Movie, "created_ad" | "updated_at" | "id">;

export type PaginationObjectType = {
    message: string,
    data: object | any[],
    meta: {
        currentPage: number,
        total: number,
        numberPages: number,
        perPage: number,
    }
}