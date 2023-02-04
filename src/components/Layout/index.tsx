import React from 'react';
import SideMenu from '../SideMenu';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <>
            <SideMenu />
            <main className="flex justify-end  w-full h-full min-h-screen pb-4 relative bg-gray-50 dark:bg-primary">
                <div className="w-[calc(100%_-_4rem)]">
                    <div className="px-4 py-2">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Layout;