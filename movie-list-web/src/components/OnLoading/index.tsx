import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

const OnLoading: React.FC = () => {
    return (
        <div className="w-full h-screen left-0 bg-gray-100 dark:bg-black z-50 fixed top-0 flex items-center justify-center overflow-hidden">
            <div className="text-center px-2">
                <div role="status">
                    <ImSpinner2 className="inline mr-2 w-8 h-8 text-gray-600 dark:text-white animate-spin  fill-blue-600" />
                    <span className="sr-only">Loading...</span>
                </div>
                <h2 className="text-center text-gray-900 text-xl font-semibold dark:text-white">Carregando...</h2>
                <p className='text-center text-gray-900 dark:text-white'>Isso pode levar alguns segundos, por favor, não feche esta página.</p>
            </div>
        </div>
    );
}

export default OnLoading;
