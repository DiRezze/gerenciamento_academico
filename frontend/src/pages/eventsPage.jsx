import React, { useState } from 'react';
import EventsNav from '../components/eventsNav';

const EventsPage = () => {
    
    const [eventList, setEventList] = useState([]);

    return(
        <div className="flex flex-col items-center min-h-[75%] w-full">
            <h1 className='my-4 font-medium'>Eventos</h1>
            <EventsNav/>
            <div className='w-full flex flex-col items-center justify-center gap-3'></div>
        </div>
    )
}

export default EventsPage;
