export const changeThemeMode = () => {
    let isDark = false;

    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
        isDark = true;
    } else {
        document.documentElement.classList.remove("dark");
    }

    return isDark;
}

export const setThemeModeInLocalStorage = (isDark: boolean) => {
    const theme = isDark ? "dark" : "light";

    localStorage.setItem("theme", theme);
}

export const onlyNumbers = (value: string) => {
    const num = value.replace(/[^0-9]/g, '');
    return num;
}