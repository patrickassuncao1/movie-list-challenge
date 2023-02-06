import React, { ChangeEvent, useEffect, useState } from 'react';
import { HiSearch } from "react-icons/hi";
import { motion } from "framer-motion";

import MovieCard from '../../components/MovieCard';
import { containerMovieCard } from '../../utils/variants';
import { routeLinks } from '../../utils/constants';
import { useQuery } from 'react-query';
import { findManyMovies } from '../../services/api/movie';
import RenderIf from '../../components/RenderIf';
import { ImSpinner2 } from 'react-icons/im';
import Pagination from '../../components/Pagination';

const Home: React.FC = () => {

  const [params, setParams] = useState({
    page: 1,
    search: ""
  });


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [params.page]);

  const { data, isLoading } = useQuery(
    ["find-many-movies", params],
    () => findManyMovies(params),
    {
      keepPreviousData: true,
      retry: 0
    }
  );


  const handleClickLink = (number: number) => {
    setParams({ ...params, page: number });
  }

  const prevPageClick = () => {
    setParams({ ...params, page: params.page - 1 });
  }

  const nextPageLink = () => {
    setParams({ ...params, page: params.page + 1 });
  }

  const handleSearchChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setParams({
      page: 1,
      search: value
    });
  };

  return (
    <section className="px-2 block h-full mt-10 ">
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
              onChange={handleSearchChange}
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
        <RenderIf isTrue={isLoading}>
          <span className="flex items-center pl-3 dark:text-white">
            <ImSpinner2 className="inline mr-3 w-4 h-4 animate-spin text-blue-600" />
            Carregando ...
          </span>
        </RenderIf>
        <RenderIf isTrue={(data?.data.length ?? 0) <= 0 && !isLoading}>
          <span className="flex items-center py-3 dark:text-white">
            Nenhum Filme Encontrado
          </span>
        </RenderIf>

        <RenderIf isTrue={data?.data.length || 0 > 0 ? true : false}>
          <motion.div
            className="flex-wrap flex flex-1 gap-6 h-max items-center justify-start"
            variants={containerMovieCard}
            initial={"hidden"}
            animate={"visible"}

          >
            {data?.data.map((item) => (
              <MovieCard
                key={item.id}
                to={routeLinks.movieInfo + item.id}
                subTitle={item.releaseYear}
                title={item.title}
                urlImage={item.MovieImage.url}
              />
            ))}
          </motion.div>
        </RenderIf>

      </div>
      <div className="md:mt-10 mt-8">
        {data?.meta &&
          <RenderIf isTrue={data.meta.total > data.meta.perPage}>
            <Pagination
              {...data?.meta}
              isLoading={isLoading}
              handleClickLink={handleClickLink}
              nextPageLink={nextPageLink}
              prevPageClick={prevPageClick}
              dataLength={data.data.length}
            />
          </RenderIf>
        }
      </div>
    </section>
  );
}

export default Home;