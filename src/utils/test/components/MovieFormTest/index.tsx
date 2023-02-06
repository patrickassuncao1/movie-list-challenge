import React from 'react';
import { movieFormType } from '../../../../@types/models';
import useAlert from '../../../../hooks/useAlert';
import MovieForm from '../../../../pages/AddMovie/MovieForm';

// import { Container } from './styles';

const MovieFormTest: React.FC = () => {

    const { alert, showAndHidden } = useAlert({});

    const createMovieSubmit = async (data: movieFormType) => { }

    return (
        <MovieForm
            loadingSubmit={false}
            showAndHidden={showAndHidden}
            createMovieSubmit={createMovieSubmit}
        />
    );
}

export default MovieFormTest;