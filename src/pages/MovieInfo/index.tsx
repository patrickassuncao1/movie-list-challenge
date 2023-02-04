import React from 'react';
import ImageCard from './ImageCard';

const MovieInfo: React.FC = () => {
    return (
        <section className="px-2 block h-full mt-6 max-w-screen-2xl ">
            <h1
                className="text-xl my-4 font-extrabold tracking-tight leading-none dark:text-white text-gray-900 md:text-3xl">
                Informações
            </h1>
            <div className="my-10">
                <ImageCard
                    urlImage="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                />
                <div className="mt-10 max-w-5xl">
                    <p className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Descrição</p>
                    <p className="dark:text-white text-gray-900">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odit blanditiis asperiores nam qui id incidunt, possimus ipsa atque debitis cum commodi quibusdam corporis voluptatibus maxime officia libero in. Ut.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default MovieInfo;