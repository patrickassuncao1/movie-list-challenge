import { findManyMoviesResponseType, movieFormType, MovieType } from '../../../@types/models';
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
