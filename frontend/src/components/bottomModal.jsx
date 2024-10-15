import React, { useCallback } from "react";
import { ChevronsDown } from "lucide-react";
import './modal.css';

const BottomModal = ({children, open, setOpen}) => {
    const closeModal = useCallback(()=>{
        setOpen(false)
    },[setOpen]);

    if(!open) return null;

    return(
        <div className="fixed inset-0 flex items-center justify-end flex-col bg-black bg-opacity-50 h-dvh w-dvw">
        <div 
            className='flex flex-col items-center bottom-modal-custom max-w-[480px] w-[90vw] min-h-[80dvh] bg-zinc-800 rounded-t-2xl p-4'
        >
            <div className="flex-row items-center justify-center w-full flex">
                <button
                    onClick={closeModal}
                    className="bg-transparent items-center flex-row flex justify-center active:outline-none active:stroke-none hover:outline-none"
                >
                    <ChevronsDown />
                </button>
            </div>
            {children}
        </div>
    </div>
    );
}

export default BottomModal;
