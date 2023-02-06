import React from 'react';
import Pagination from '../../../../components/Pagination';

type PaginationTestType = {
    handleClickLink?: () => void,
    nextPageLink?: () => void,
    prevPageClick?: () => void
}

const elements = {
    currentPage: 2,
    dataLength: 10,
    perPage: 10,
    numberPages: 4,
    total: 40
}

const emptyFunction = () => { }


const PaginationTest = (
    {
        handleClickLink = emptyFunction,
        nextPageLink = emptyFunction,
        prevPageClick = emptyFunction
    }
        : PaginationTestType
) => {

    return (
        <Pagination
            {...elements}
            handleClickLink={handleClickLink}
            nextPageLink={nextPageLink}
            isLoading={false}
            prevPageClick={prevPageClick}
        />
    );
}

export default PaginationTest;