import React from 'react';
import { findFirstMovieResponseType } from '../../../@types/models';
import { convertToHoursAndMinutes } from '../../../utils/function';

type ImageCardType = {
  data: findFirstMovieResponseType | undefined
}

const ImageCard = ({ data }: ImageCardType) => {

  return (
    <article className="flex gap-4 rounded-lg  sm:flex-row flex-col">
      <div
        className="relative bg-black h-96 sm:w-80 w-full flex flex-col justify-end"
      >
        <img
          alt="image-card"
          src={data?.MovieImage.url}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </div>
      <div className="flex flex-col sm:p-4 mt-4 sm:mt-2 leading-normal max-w-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data?.title}
        </h5>
        <dl className="max-w-md text-gray-900 divide-y mt-4 divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Duração</dt>
            <dd className="text-lg font-semibold">{convertToHoursAndMinutes(Number(data?.duration))}</dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Ano de Lançamento</dt>
            <dd className="text-lg font-semibold">{data?.releaseYear}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default ImageCard;