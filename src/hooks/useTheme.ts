import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useTheme = () => {
    const props = useContext(ThemeContext);

    return props;
}

export default useTheme;