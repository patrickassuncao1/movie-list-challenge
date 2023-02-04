import React from 'react';
import { HiSearch } from "react-icons/hi";

import MovieCard from '../../components/MovieCard';
import { motion } from "framer-motion";
import { containerMovieCard } from '../../utils/variants';

const Home: React.FC = () => {
  return (
    <section className="px-2 block h-full mt-6 max-w-screen-2xl ">
      <div>
        <h1
          className="text-xl my-4 font-extrabold tracking-tight leading-none dark:text-white text-gray-900 md:text-3xl">
          Últimos filmes adicionados
        </h1>
        <div className="relative mt-6">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only hidden">Search</label>
          <div className="relative max-w-xs mt-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <HiSearch aria-hidden="true" className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="search"
              // onChange={handleSearchChange}
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-700"
              placeholder="Pesquisar o nome do filme"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg my-4 font-extrabold leading-none tracking-tight text-gray-900 md:text-xl dark:text-white">
          Próximos Filmes
        </h2>
        <motion.div
          className="flex-wrap flex flex-1 gap-6 h-max items-center justify-start"
          variants={containerMovieCard}
          initial="hidden"
          animate="visible"
        >
          <MovieCard urlImage="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" />
          <MovieCard urlImage="https://images.unsplash.com/photo-1520464399004-1f1e8e938bb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYXVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;