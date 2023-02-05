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

type MovieImagesType = {
    id: string,
    url: string
}

type responsePaginationType = {
    currentPage: number,
    total: number,
    numberPages: number,
    perPage: number
}

export type findManyMoviesResponseType = {
    message: string,
    data: Omit<MovieType, "created_ad" | "updated_at" | "description" | "duration" | "author"> & {
        MovieImage: MovieImagesType
    }[],
    meta: responsePaginationType
}
