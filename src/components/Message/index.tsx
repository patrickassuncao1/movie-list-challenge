import React, { ReactNode } from 'react';
import { BsCheckCircle } from "react-icons/bs";

type messageType = {
    title: string,
    message?: string,
    children : ReactNode
}

const Message = ({ title, message, children }: messageType) => {
    return (
        <div className="p-4">
            <div className="flex items-start gap-4">
                <span className="text-green-600">
                    <BsCheckCircle className="h-6 w-6" />
                </span>

                <div className="flex-1">
                    <strong className="block font-medium text-gray-900 dark:text-white">{title}</strong>

                    <p className="mt-1 text-sm text-gray-700 dark:text-white/60">
                        {message}
                    </p>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Message;

