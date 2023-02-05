import * as yup from "yup";

export const createMovieSchema = yup.object({
    author: yup.string().required(),
    title: yup.string().required(),
    duration: yup.number().required(),
    releaseYear: yup.number().required(),
    description: yup.string().required()
});