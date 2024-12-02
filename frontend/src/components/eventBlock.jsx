import React from "react";

const EventBlock = ({eventData}) => {
    return(
        <div className="rounded-xl shadow-md bg-neutral-900 w-4/5 h-48">
            <div></div>
            <h2>{eventData.title}</h2>
        </div>
    );
}

export default EventBlock;
