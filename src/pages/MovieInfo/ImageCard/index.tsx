import React from 'react';
import { motion } from 'framer-motion';

type ImageCardType = {
  urlImage: string
}

const ImageCard = ({ urlImage }: ImageCardType) => {

  return (
    <article className="flex gap-4 sm:flex-row flex-col">
      <motion.div
        layoutId="test"
        className="relative bg-black h-96 sm:w-80 w-full flex flex-col justify-end"
      >
        <img
          alt="image-card"
          src={urlImage}
          className="h-full w-full object-cover object-center"
        />
      </motion.div>
      <div className="flex flex-col sm:p-4 mt-4 sm:mt-2 leading-normal max-w-md">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology
        </h5>
        <dl className="max-w-md text-gray-900 divide-y mt-4 divide-gray-200 dark:text-white dark:divide-gray-700">
          <div className="flex flex-col pb-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Duração</dt>
            <dd className="text-lg font-semibold">1h 20m</dd>
          </div>
          <div className="flex flex-col pt-3">
            <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Ano de Lançamento</dt>
            <dd className="text-lg font-semibold">2023</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default ImageCard;