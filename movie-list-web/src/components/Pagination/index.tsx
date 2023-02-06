import React from 'react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { responsePaginationType } from '../../@types/models';
import { createLinksPagination } from '../../utils/function';

type PaginationType = responsePaginationType & {
    isLoading: boolean,
    handleClickLink: (number: number) => void,
    prevPageClick: () => void,
    nextPageLink: () => void,
    dataLength: number
}

const Pagination = ({ currentPage, dataLength, numberPages, isLoading, total, perPage, handleClickLink, nextPageLink, prevPageClick }: PaginationType) => {

    const links = createLinksPagination(numberPages, currentPage);

    const showing = dataLength === perPage ?
        currentPage * perPage : (currentPage - 1) * perPage + dataLength;

    return (

        <div className="flex justify-center flex-col w-full items-center space-y-3">
            <nav aria-label="Page navigation">
                <ul className="flex items-center list-style-none space-x-1">
                    <li>
                        <button
                            onClick={prevPageClick}
                            disabled={currentPage === links?.at(0)?.number || isLoading}
                            className={`relative block py-1.5 px-1 border-0 bg-transparent outline-none transition-all duration-100 rounded-full ${currentPage === links.at(0)?.number ? "text-gray-500" : "dark:text-white text-gray-900 hover:text-blue-600 hover:bg-gray-300"} focus:shadow-none`}>
                            <FiChevronLeft className='w-5 h-5' />
                        </button>
                    </li>
                    {links?.map((el) => (
                        <li key={el.key}>
                            <button
                                onClick={() => handleClickLink(el.number)}
                                disabled={isLoading || el.number === currentPage || el.number === -1}
                                className={`${el.number === currentPage ? "bg-gray-300  text-black" : "bg-transparent dark:text-white text-gray-800"} ${el.number !== -1 && "hover:bg-gray-300 hover:text-black"} relative block  py-1.5 px-3 border-0 outline-none transition-all duration-100 rounded-full focus:shadow-none`}
                            >
                                {el.label}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={nextPageLink}
                            disabled={currentPage === links.at(-1)?.number || isLoading}
                            className={`relative block  py-1.5 px-1 border-0 bg-transparent outline-none transition-all duration-100 rounded-full ${currentPage === links.at(-1)?.number ? "text-gray-500" : "dark:text-white text-gray-900 hover:text-blue-600 hover:bg-gray-300"} focus:shadow-none`}>
                            <FiChevronRight className='w-5 h-5' />
                        </button>
                    </li>
                </ul>
            </nav>
            <span className="text-sm text-gray-700 dark:text-white ">
                Mostrando <span className="font-semibold text-gray-900 dark:text-white ">{showing - dataLength + 1}</span> a <span className="font-semibold text-gray-900 dark:text-white">{showing}</span> de <span className="font-semibold text-gray-900  dark:text-white">{total}</span> Entradas
            </span>
        </div>
    );
}

export default Pagination;