import React, { useState } from 'react';
import { motion } from "framer-motion";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};

type toggleType = {
    isOn: boolean,
    toggleSwitch: () => void
}


const Toggle = ({ isOn, toggleSwitch }: toggleType) => {

    const toggleClass = isOn ? "justify-end bg-white" : "justify-start bg-gray-400";

    return (
        <div
            className={`w-full h-6 flex rounded-full py-2 px-1 cursor-pointer items-center ${toggleClass}`}
            onClick={toggleSwitch}
        >
            <motion.div
                className={`${isOn ? "bg-black" : "bg-gray-300"} w-5 h-5  rounded-full justify-center p-0.5 items-center`}
                layout
                transition={spring}
            >
                {isOn ? (
                    <MdOutlineDarkMode className="w-full h-full text-white" />
                ) : (
                    <MdOutlineLightMode className="w-full h-full" />
                )}

            </motion.div>
        </div>
    );

}

export default Toggle;