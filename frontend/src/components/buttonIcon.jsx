import React from 'react';

const ButtonWithIcon = ({iconComponent, text, onClick, params, isActive}) => {

    return(
        <button 
            onClick={onClick}
            className='bg-blue-500 flex items-center justify-start p-2 text-white rounded-md transform transition-transform duration-200 ease-in-out hover:scale-[1.02] active:scale-95'
        >
            {iconComponent}
            <span className='font-medium'>{text}</span>
        </button>

    );
}

export default ButtonWithIcon;
