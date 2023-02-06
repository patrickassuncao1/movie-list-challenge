import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { FiLogOut } from "react-icons/fi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import useTheme from '../../hooks/useTheme';
import { routeLinks } from '../../utils/constants';
import Toggle from '../Toggle';
import SideMenuLink from './SideMenuLink';

type SideMenuType = {
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SideMenu = ({ isOpen, setOpen }: SideMenuType) => {

    const { handleThemeModeChange, isDark } = useTheme();

    const { addMovie, home } = routeLinks;

    return (
        <aside>
            <div className="relative">
                <button
                    className={`absolute top-2 z-10 sm:hidden right-5 text-white p-1 rounded-md hover:bg-blue-600`}
                    onClick={() => setOpen(!isOpen)}
                >
                    <AiOutlineMenu className="w-5 h-5" />
                </button>
            </div>
            <div
                className={`flex h-screen ${!isOpen && "-left-20"} duration-200 sm:left-0 w-16 flex-col fixed justify-between bg-white z-10 dark:bg-secondary`}
            >
                <div>
                    <div className="inline-flex h-16 w-16 items-center justify-center">
                        <span className="block h-10 w-10 rounded-lg">
                            <img src="/images/avatar.png" className="w-full h-full object-cover" alt="logo-image" />
                        </span>
                    </div>

                    <div className="border-t border-gray-100 h-full dark:border-gray-100">
                        <nav aria-label="Main Nav" className="h-full flex flex-col p-2">
                            <div className="py-4">
                                <SideMenuLink
                                    text="Início"
                                    to={{ pathname: home }}
                                >
                                    <AiOutlineHome className="h-5 w-5 opacity-75" />
                                </SideMenuLink>
                            </div>
                            <ul className="space-y-1 border-t border-gray-100 pt-4">
                                <li>
                                    <SideMenuLink
                                        to={{ pathname: addMovie }}
                                        text="Adicionar Filme"
                                    >
                                        <MdOutlineAddPhotoAlternate className="h-5 w-5 opacity-75" />
                                    </SideMenuLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky inset-x-0 bottom-0 space-y-1">
                    <div className="p-2">
                        <Toggle
                            isOn={isDark}
                            toggleSwitch={handleThemeModeChange}
                        />
                    </div>
                    <div className="border-t border-gray-100 p-2 mt-2"></div>
                </div>
            </div>
        </aside>

    );
}

export default SideMenu;