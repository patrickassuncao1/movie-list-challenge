import * as yup from "yup";

export const createMovieSchema = yup.object({
    author: yup.string().required("Campo Obrigatório"),
    file: yup.mixed().required("Imagem é Obrigatória"),
    title: yup.string().required("Campo Obrigátorio"),
    duration: yup.number().required("Campo Obrigatório").typeError("Campo Obrigatório"),
    releaseYear: yup.number().required("Campo Obrigatório").typeError("Campo Obrigatório"),
    description: yup.string().required("Campo obrigátorio").min(15, "No minímo 15 caracteres")
});