import React from 'react';
import { motion } from "framer-motion";
import { MovieCardItem } from '../../utils/variants';
import { Link } from 'react-router-dom';

type MovieCardType = {
    urlImage: string,
    to: string,
    title: string,
    subTitle: string | number
}

const MovieCard = ({ urlImage, to, subTitle, title }: MovieCardType) => {
    return (
        <motion.article
            variants={MovieCardItem}
            className="group relative w-full rounded-lg bg-black min-h-[15rem] sm:min-h-[20rem] sm:min-w-[18rem] sm:w-auto sm:max-w-[18rem] flex flex-col h-full justify-end"
        >
            <Link to={to}>
                <img
                    alt="image-cards"
                    src={urlImage}
                    className="absolute rounded-lg inset-0 h-full w-full object-cover object-center opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4">
                    <p className="text-xs font-medium tracking-widest text-gray-200">
                        {subTitle}
                    </p>
                    <p className="text-2xl font-bold text-white">{title}</p>
                </div>
            </Link>
        </motion.article>
    );
}

export default MovieCard;