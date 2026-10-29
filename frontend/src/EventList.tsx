import { useEffect, useState } from "react";
import EventsCard from "./EventsCard";
function EventsList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch(
        "http://localhost:3000/api/events"
      );

      const data = await response.json();

      setEvents(data);
    }

    fetchEvents();
  }, []);

  return (
     events.map(event => (
              <EventsCard event={event} />
            ))
  );
}

export default EventsList;