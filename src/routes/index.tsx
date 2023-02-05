import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import AddMovie from '../pages/AddMovie';
import Home from '../pages/Home';
import MovieInfo from '../pages/MovieInfo';
import NotFound from '../pages/NotFound';
import { routeLinks } from '../utils/constants';

const AppRoutes: React.FC = () => {

    const { home, movie, addMovie } = routeLinks;

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path={home} element={<Home />} />
                    <Route path={movie} element={<MovieInfo />} />
                    <Route path={addMovie} element={<AddMovie />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;