import { findFirstMovieResponseType, findManyMoviesResponseType, movieFormType, MovieType } from '../../../@types/models';
import { api } from '../../../config/api';

type findManyMoviesType = {
    search?: string,
    page: number
}

export const createMovie = async (items: movieFormType) => {

    const response = await api.post("/movie/create", items, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    const data = response.data;

    return data.data as MovieType;
}

export const findManyMovies = async ({ page, search }: findManyMoviesType) => {

    const searchValue = search ? "&search=" + search : "";

    const response = await api.get("/movie/find-many/?page=" + page + searchValue);
    const data = response.data;

    return data as findManyMoviesResponseType;

}

export const findFirstMovie = async (movieId: string) => {
    
    const response = await api.get("/movie/find-first/" + movieId);
    const data = response.data;

    return data.data as findFirstMovieResponseType;
}