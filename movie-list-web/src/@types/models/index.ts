export type MovieType = {
    id: string,
    author: string,
    title: string,
    duration: number | string,
    releaseYear: number | string,
    description: string,
    created_ad: string;
    updated_at: string;
}

export type movieFormType = Omit<MovieType, "created_ad" | "updated_at" | "id"> & {
    file: File
}
export type findFirstMovieResponseType = MovieType & {
    MovieImage: MovieImagesType
}

type MovieImagesType = {
    id: string,
    url: string
}

export type responsePaginationType = {
    currentPage: number,
    total: number,
    numberPages: number,
    perPage: number
}

type findManyMovieData = Omit<MovieType, "created_ad" | "updated_at" | "description" | "duration" | "author"> & {
    MovieImage: MovieImagesType
};

export type findManyMoviesResponseType = {
    message: string,
    data: findManyMovieData[],
    meta: responsePaginationType
}
