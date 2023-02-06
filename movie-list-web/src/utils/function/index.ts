type forArrayElementType = {
    number: number,
    label: string,
    key: string
}

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


const forArrayElement = (array: forArrayElementType[], receive: number, test: number) => {
    for (let index = receive; index <= test; index++) {
        array.push({
            number: index,
            label: index.toString(),
            key: "page-" + index + "-" + Math.random().toString(36).slice(2)
        });
    };
};

export const createLinksPagination = (pages: number, currentPage: number) => {

    const array: forArrayElementType[] = [];
    const maxLeft = 2;
    const maxRight = 3;
    const elementsAhead = pages - currentPage;
    const maxElements = 6;

    const firstPage = Math.max((currentPage - (maxLeft + 3)), 1);

    if (currentPage >= 6) {
        forArrayElement(array, firstPage, firstPage + maxLeft - 1);

        if (currentPage + 1 !== array.at(-1)?.number) {
            array.push({
                number: -1,
                label: "...",
                key: "page-..." + Math.random().toString(36).slice(2)
            });
        };
        if (currentPage + maxRight <= pages) {
            forArrayElement(array, currentPage, currentPage + maxRight - 1);
        } else if (elementsAhead > 0) {
            forArrayElement(array, currentPage, currentPage + elementsAhead);
        } else {
            forArrayElement(array, currentPage - maxLeft, currentPage);
        }

    } else {
        forArrayElement(array, 1, pages > 6 ? maxElements : pages);
    }

    return array;
}

export const convertToHoursAndMinutes = (minutes: number) => {

    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    const hoursExist = hours ? hours + "h" : "";
    const minExist = min ? min + "m" : "";

    return `${hoursExist} ${minExist}`;
}