import React, { useState } from 'react';
import axios from 'axios';
import EventsNav from '../components/eventsNav';
import SearchBar from '../components/searchBar';
import EventBlock from '../components/eventBlock';

const EventsPage = () => {
    const [eventList, setEventList] = useState([]);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:8089/events');
            setEventList(response.data);
        } catch (err) {
            console.error('Erro ao buscar eventos:', err);
        }
    };

    return (
        <div className="flex flex-col items-center min-h-[75%] w-full">
            <h1 className="my-4 font-medium">Eventos</h1>
            <EventsNav />
            <div className="w-full flex flex-col items-center justify-center gap-3">
                {eventList.length > 0 ? (
                    eventList.map((event) => (
                        <EventBlock eventData={event} />
                    ))
                ) : (
                    <p>Nenhum evento carregado.</p>
                )}
            </div>
            <button onClick={fetchEvents} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Carregar
            </button>
        </div>

    );

};

export default EventsPage;
