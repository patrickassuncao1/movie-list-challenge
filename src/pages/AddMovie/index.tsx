import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Message from '../../components/Message';
import MovieForm from './MovieForm';


const AddMovie: React.FC = () => {

    const [isSuccess, setIsSuccess] = useState(false);

    return (
        <section className="px-2 block h-full mt-6 max-w-screen-2xl ">
            <h1
                className="text-xl my-4 font-extrabold tracking-tight leading-none dark:text-white text-gray-900 md:text-3xl">
                Adicionar Filme
            </h1>
            <p className="dark:text-white text-gray-900 sm:text-base text-sm">
                Preenchar os campos corretamente para adicionar o filme
            </p>
            <div className="w-full">
                {!isSuccess ? (
                    <MovieForm />
                ) : (
                    <div className="mt-8">
                        <Message
                            title="Adicionado com sucesso"
                            message="Clique em visualizar para ver as informações"
                        >
                            <div className="mt-8 flex gap-2 sm:flex-row flex-col">
                                <Link
                                    to={'/parceiro'}
                                    className="block gap-2 sm:w-[12rem] w-full text-center rounded-lg bg-blue-700 hover:bg-blue-800 px-4 py-2 text-white transition"
                                >
                                    Visualizar
                                </Link>

                                <button
                                    onClick={() => setIsSuccess(false)}
                                    type="button"
                                    className="block rounded-lg px-4 py-2 w-full sm:w-[12rem] bg-gray-600 hover:bg-gray-500 text-white text-center dark:bg-secondary transition dark:hover:bg-secondary/75"
                                >
                                    Adicionar Filme
                                </button>
                            </div>
                        </Message>
                    </div>
                )}

            </div>
        </section>
    );
}

export default AddMovie;