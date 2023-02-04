import React from 'react';
import { motion } from "framer-motion";
import { MovieCardItem } from '../../utils/variants';
import { Link } from 'react-router-dom';

type MovieCardType = {
    urlImage: string
}

const MovieCard = ({ urlImage }: MovieCardType) => {
    return (
        <motion.article
            variants={MovieCardItem}
            className="group relative w-full  bg-black min-h-[15rem] sm:min-h-[20rem] sm:min-w-[18rem] sm:w-auto sm:max-w-[18rem] flex flex-col h-full justify-end"
        >
            <Link to={"/"}>
                <img
                    alt="Developer"
                    src={urlImage}
                    className="absolute inset-0 h-full w-full object-cover object-center opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4">
                    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                        Developer
                    </p>
                    <p className="text-2xl font-bold text-white">Tony Wayne</p>
                </div>
            </Link>
        </motion.article>
    );
}

export default MovieCard;