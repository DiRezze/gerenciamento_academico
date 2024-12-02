import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RefreshCcw } from "lucide-react";
import EventsNav from '../components/eventsNav';
import EventBlock from '../components/eventBlock';

const EventsPage = () => {

    const [eventList, setEventList] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchEvents = async () => {
        try {
          setIsRefreshing(true);
          const response = await axios.get('http://localhost:8089/events');
          setEventList(response.data);
        } catch (err) {
          console.error('Erro ao buscar eventos:', err);
        } finally {
          setIsRefreshing(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleRefresh = () => {
        fetchEvents();
    };

    return (
        <div className="flex flex-col items-center min-h-[75%] w-full">
            <h1 className="my-4 font-medium">Eventos</h1>
            <EventsNav />

            { isRefreshing ? (
                <div className="flex flex-row items-center justify-center">
                    <RefreshCcw className="mx-2  hover:scale-[1.02] refreshing-icon" />
                    <span>Carregando</span>
                </div>
            ):(
                <div className="flex flex-row items-center justify-center">
                    <span className="text-gray-200">
                        {eventList.length > 0
                            ? `Foram encontrados ${eventList.length} eventos.`
                            : "Recarregar"}
                    </span>
                    <RefreshCcw
                        className="mx-2 hover:scale-[1.02] refresh-spin-icon"
                        onClick={handleRefresh}/>
                </div>

            )}
            <div className="w-full flex flex-col items-center justify-center gap-3">
                {eventList.length > 0 ? (
                    eventList.map((event) => (
                        <EventBlock eventData={event} />
                    ))
                ) : (
                    <p>Nenhum evento carregado.</p>
                )}
            </div>
        </div>

    );

};

export default EventsPage;
