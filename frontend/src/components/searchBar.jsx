import React, { useRef, useState } from "react";
import { Search } from "lucide-react";

const SearchBar = (callbackFunc) => {

    const [isFocused, setIsFocused] = useState(false);

    const inputRef = useRef(null);

    const handleBarClick = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    return(
        <div 
            className={`flex flex-grow rounded-lg flex-row h-min items-center bg-neutral-900 border-gray-300 border p-2 ${isFocused ? 'bg-neutral-800 transition-shadow shadow-sm shadow-blue-100' : 'bg-neutral-900'}`}
            onClick={handleBarClick}
        >
            <Search className='mx-1 text-gray-100' />
            <input
                type="text"
                ref={inputRef}
                className={`focus:ring-transparent focus:outline-none flex-grow rounded-lg mr-2 bg-neutral-900 text-white placeholder-gray-500 ${isFocused ? 'bg-neutral-800' : 'bg-neutral-900'}`}
                placeholder='Pesquisar...'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    )
}

export default SearchBar;
