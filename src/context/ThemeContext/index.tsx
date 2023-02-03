import React, { createContext, useEffect, useState } from 'react';
import { ProviderType, ThemeContextType } from '../../@types/context';
import { changeThemeMode, setThemeModeInLocalStorage } from '../../utils/function';


export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

const ThemeProvider = ({ children }: ProviderType) => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const theme = changeThemeMode();
        setIsDark(theme);
    }, []);

    useEffect(() => {
        changeThemeMode();
    }, [isDark]);

    const handleThemeModeChange = () => {
        const newValue = !isDark;
        setThemeModeInLocalStorage(newValue);
        setIsDark(newValue);
    }

    return (
        <ThemeContext.Provider value={{ isDark, handleThemeModeChange }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;