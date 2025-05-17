import React from "react";

const Model = ({ children, isOpen, onClose, hideHeader, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-transparent bg-opacity-50">
            <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                {!hideHeader && (
                    <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-gray-300">
                        <h3 className="md:text-lg font-medium text-gray-900">{title}</h3>
                    </div>
                )}

                <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-orange-100 hover:text-gray-900 rounded-lg text-sm w-8 flex justify-center items-center absolute top-3.4 right-3.5 cursor-pointer p-2"
                    onClick={onClose}
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 6l12 12M18 6L6 18"
                        />
                    </svg>
                </button>

                <div className="flex-1 overflow-y-auto custom-scrollbar">{children}</div>
            </div>
        </div>
    );
};

export default Model;
