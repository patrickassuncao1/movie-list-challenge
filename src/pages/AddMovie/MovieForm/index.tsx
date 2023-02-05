import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createMovieSchema } from '../../../utils/validations';
import DropzoneEl from '../../../components/DropzoneEl';
import { onlyNumbers } from '../../../utils/function';
import Spinner from '../../../components/Spinner';
import { showAlertType } from '../../../hooks/useAlert';
import { AlertType } from '../../../components/Alert';
import { movieFormType } from '../../../@types/models';

const maxFileSize = 2 * 1024 * 1024 // 2mb;

type MovieFormType = {
    showAndHidden: (data: showAlertType) => void,
    createMovieSubmit: (values: movieFormType) => Promise<void>,
    loadingSubmit: boolean
}

const MovieForm = ({ showAndHidden, createMovieSubmit, loadingSubmit }: MovieFormType) => {

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { control, handleSubmit, formState: { errors }, setValue, register } = useForm<movieFormType>({
        resolver: yupResolver(createMovieSchema.required()),
        defaultValues: {
            author: "",
            description: "",
            duration: "",
            title: "",
            releaseYear: ""
        }
    });

    useEffect(() => {
        return () => {
            revokeUrl()
        }
    }, []);


    const revokeUrl = () => {
        if (imagePreview) {
            URL.revokeObjectURL(imagePreview);
        }
    }

    const onSubmit = async (data: movieFormType) => {

        await createMovieSubmit(data);

    }

    const onDropUpload = async (acceptedFiles: File[]) => {
        if (acceptedFiles.length < 1 && loadingSubmit) return;

        revokeUrl();

        if (acceptedFiles[0].size > maxFileSize) {
            showAndHidden({
                message: "Arquivo maior que 2mb",
                type: "danger"
            });

            return;
        }

        setValue("file", acceptedFiles[0], {
            shouldValidate: true
        });

        setImagePreview(URL.createObjectURL(acceptedFiles[0]));

    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="mt-6 flex md:space-x-16 w-full md:space-y-0 space-y-8 md:flex-row flex-col">
                    <div>
                        <DropzoneEl
                            onDrop={onDropUpload}
                            image={imagePreview}
                        />
                        {errors.file &&
                            <p className="mt-2 text-sm text-red-600">
                                {errors.file.message}
                            </p>
                        }
                    </div>
                    <div className="grid gap-4 mb-4 sm:grid-cols-2 w-full max-w-4xl">
                        <div>
                            <label htmlFor="author" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Autor</label>
                            <input
                                type="text"
                                {...register("author")}
                                id="author"
                                disabled={loadingSubmit}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                                placeholder="Autor"
                            />

                            {errors.author &&
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.author.message}
                                </p>
                            }
                        </div>
                        <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Título</label>
                            <input
                                type="text"
                                id="title"
                                disabled={loadingSubmit}
                                {...register("title")}
                                className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                                placeholder="Título"
                            />

                            {errors.title &&
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.title.message}
                                </p>
                            }
                        </div>
                        <div>
                            <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Duração (Em minutos)</label>
                            <Controller
                                name="duration"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <input
                                            {...field}
                                            type="tel"
                                            id="duration"
                                            disabled={loadingSubmit}
                                            onChange={(e) => field.onChange(onlyNumbers(e.target.value))}
                                            className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                                            placeholder="60"
                                            autoComplete="off"
                                            maxLength={8}
                                        />
                                    )
                                }}
                            />
                            {errors.duration &&
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.duration.message}
                                </p>
                            }
                        </div>
                        <div>
                            <label htmlFor="releaseYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ano de Lançamento</label>
                            <Controller
                                name="releaseYear"
                                control={control}
                                render={({ field }) => {
                                    return (
                                        <input
                                            {...field}
                                            type="tel"
                                            id="releaseYear"
                                            disabled={loadingSubmit}
                                            onChange={(e) => field.onChange(onlyNumbers(e.target.value))}
                                            className="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                                            placeholder="2023"
                                            autoComplete="off"
                                            maxLength={8}
                                        />
                                    )
                                }}
                            />
                            {errors.releaseYear &&
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.releaseYear.message}
                                </p>
                            }
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição</label>
                            <textarea
                                id="description"
                                rows={5}
                                disabled={loadingSubmit}
                                {...register("description")}
                                className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-600 focus:border-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
                                placeholder="Descrição do Filme"
                            >
                            </textarea>
                            {errors.description &&
                                <p className="mt-2 text-sm text-red-600">
                                    {errors.description.message}
                                </p>
                            }
                        </div>
                    </div>
                </div>
                <div className="md:mt-20 mt-5  w-full flex justify-center items-center">
                    <button
                        type='submit'
                        disabled={loadingSubmit}
                        className="relative w-full sm:w-auto inline-block shrink-0 rounded-md bg-blue-700 hover:bg-blue-800 text-white px-12 py-3 text-sm font-medium transition  focus:outline-none focus:ring"
                    >
                        <Spinner show={false} />
                        Postar
                    </button>
                </div>
            </form >
        </React.Fragment>

    );
}

export default MovieForm;