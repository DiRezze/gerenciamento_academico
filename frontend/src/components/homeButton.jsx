import React from "react";
import { Link } from 'react-router-dom';

const HomeButton = ({ text, targetLink, icon }) => {
    return (
        <Link to={targetLink}>
            <div className="flex items-center justify-start p-4 bg-blue-500 text-white rounded-md transform transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-95">
                {icon && <span className="mr-2">{icon}</span>}
                <h2 className="text-lg font-semibold">{text}</h2>
            </div>
        </Link>
    );
}

export default HomeButton;