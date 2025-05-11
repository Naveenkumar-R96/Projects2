import React from "react";

const Model = ({ children, isOpen, onClose, hideHeader, title }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="relative flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                {!hideHeader && (
                    <div className="p-4 border-b">
                        <h3 className="text-lg font-semibold">{title}</h3>
                    </div>
                )}

                <button
                    type="button"
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
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

                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default Model;
