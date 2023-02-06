import React, { useState } from 'react';
import SideMenu from '../SideMenu';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {

    const [isOpen, setOpen] = useState(true);

    return (
        <>
            <SideMenu
                isOpen={isOpen}
                setOpen={setOpen}
            />
            <main className="flex justify-end  w-full h-full min-h-screen pb-4 relative bg-gray-50 dark:bg-primary">
                <div className={isOpen ? "w-[calc(100%_-_4rem)]" : "w-full sm:w-[calc(100%_-_4rem)]"}>
                    <div className="px-4 py-2">
                        <Outlet />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Layout;