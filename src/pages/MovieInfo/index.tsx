import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import OnLoading from '../../components/OnLoading';
import { findFirstMovie } from '../../services/api/movie';
import NotFound from '../NotFound';
import ImageCard from './ImageCard';

const MovieInfo: React.FC = () => {

    const { movieId } = useParams();

    const { data, isLoading, error } = useQuery(
        ["first-movie", movieId],
        () => findFirstMovie(movieId ?? ""),
        {
            retry: 0
        }
    );


    if (isLoading) return <OnLoading />;
    if (error) return <NotFound />;

    return (
        <section className="px-2 block h-full mt-10 max-w-screen-2xl ">
            <h1
                className="text-xl my-4 font-extrabold tracking-tight leading-none dark:text-white text-gray-900 md:text-3xl">
                Informações
            </h1>
            <div className="my-10">
                <ImageCard
                    data={data}
                />
                <div className="mt-10 max-w-5xl">
                    <p className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Descrição</p>
                    <p className="dark:text-white text-gray-900">
                       {data?.description}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MovieInfo;