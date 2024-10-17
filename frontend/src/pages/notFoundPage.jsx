import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-white w-full">
            <h1 className="text-4xl m-4">Erro 404: Página não encontrada</h1>
            <img 
                src="https://media.tenor.com/7t8foti8FG8AAAAC/loading-screen-cat.gif" 
                alt="Loading cat" 
                className="w-1/2 rounded-md"
            />
        </div>
    );
}

export default NotFoundPage;
