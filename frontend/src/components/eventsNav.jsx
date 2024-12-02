import React from "react";

const EventsNav = ({ currentFilter, onFilterChange }) => {
    const FilterEnum = {
        OVERVIEW: 'overview',
        UPCOMING: 'upcoming',
        ALL: 'all',
    };

    const buttons = [
        { label: 'Visão Geral', filter: FilterEnum.OVERVIEW },
        { label: 'Próximos Eventos', filter: FilterEnum.UPCOMING },
        { label: 'Todos', filter: FilterEnum.ALL },
    ];

    return (
        <nav className="flex gap-4 mb-4">
            {buttons.map(({ label, filter }) => (
                <button
                    key={filter}
                    className={`px-4 py-2 rounded-md ${
                        currentFilter === filter ? 'bg-blue-500 text-white' : 'bg-zinc-600'
                    }`}
                    aria-pressed={currentFilter === filter}
                    onClick={() => onFilterChange(filter)}
                >
                    {label}
                </button>
            ))}
        </nav>
    );
};

export default EventsNav;
