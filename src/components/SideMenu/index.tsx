import React from 'react';
import { AiOutlineHome, } from 'react-icons/ai';
import { FiLogOut } from "react-icons/fi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import useTheme from '../../hooks/useTheme';
import { routeLinks } from '../../utils/constants';
import Toggle from '../Toggle';
import SideMenuLink from './SideMenuLink';

const SideMenu: React.FC = () => {

    const { handleThemeModeChange, isDark } = useTheme();

    const { addMovie, home} = routeLinks;

    return (
        <aside>
            <div className="flex h-screen w-16 flex-col fixed justify-between bg-white z-10 dark:bg-secondary">
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
                    <div className="border-t border-gray-100 p-2">
                        <button
                            type="submit"
                            className=" dark:hover:bg-gray-600 group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm dark:text-white text-black hover:bg-gray-300"
                        >
                            <FiLogOut className="h-5 w-5 opacity-75" />
                            <span
                                className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white hidden group-hover:block"
                            >
                                Logout
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </aside>

    );
}

export default SideMenu;