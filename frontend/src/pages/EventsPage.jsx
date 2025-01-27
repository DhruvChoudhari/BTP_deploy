import React from "react";
import { useSelector } from "react-redux";
import EventCard from "../components/Events/EventCard.jsx";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);

  // Get the current date
  const currentDate = new Date();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div className="events-grid">
            {allEvents?.length > 0 ? (
              allEvents
                .filter((event) => new Date(event.Finish_Date) > currentDate) // Filter events by Finish_Date
                .map((event) => (
                  <EventCard key={event.id} active={true} data={event} />
                ))
            ) : (
              <p>No upcoming events available</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
