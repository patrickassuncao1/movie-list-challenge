import React, { ReactNode } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

type linkType = Omit<LinkProps, "to">;

type SideMenuLinkType = linkType & {
    to: {
        pathname: string,
        hash?: string,
        search?: string
    },
    children: ReactNode,
    classActive?: string,
    text: string
};

const SideMenuLink = (
    {
        to: { pathname, hash, search },
        className,
        classActive = "dark:bg-gray-600 bg-gray-300",
        children,
        text,
        ...props
    }
        : SideMenuLinkType

) => {

    const location = useLocation();
    const bgColor = location.pathname === pathname ? classActive : "";

    return (
        <Link
            to={{ pathname: pathname, hash: hash, search: search }}
            className={`group relative flex justify-center rounded dark:hover:bg-gray-600 hover:bg-gray-300 dark:text-white px-2 py-1.5 text-black ${bgColor} ${className}`}
            {...props}
        >
            {children}
            <span
                className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded  bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
            >
                {text}
            </span>
        </Link>
    );
}

export default SideMenuLink;