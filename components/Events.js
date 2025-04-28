import { Clock, MapPin } from "lucide-react";
import React from "react";

const Event = [
  {
    id: 1,
    date: "16",
    month: "April",
    title: "Queer Resilience Community Gathering",
    time: "4:30 pm - 6:30 pm",
    location: "Spark Social SF",
  },
  {
    id: 2,
    date: "16",
    month: "April",
    title: "Queer Resilience Community Gathering",
    time: "4:30 pm - 6:30 pm",
    location: "Spark Social SF",
  },
  {
    id: 3,
    date: "16",
    month: "April",
    title: "Queer Resilience Community Gathering",
    time: "4:30 pm - 6:30 pm",
    location: "Spark Social SF",
  },
];

function Events() {
  return (
    <section className="container1 py-14 pt-0">
      <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
        Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-32">
        {Event.map((event) => (
          <div key={event.id} className="flex gap-8 items-center">
            <div className="flex flex-col gap-1 items-center">
              <span className="text-base uppercase">{event.month}</span>
              <hr className="w-10 border-1 border-black" />
              <span className="text-3xl text-secondary">{event.date}</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base 2xl:text-xl text-secondary">
                {event.title}
              </p>
              <p className="flex gap-2 text-sm">
                <Clock /> {event.time}
              </p>
              <p className="flex gap-2 text-sm">
                <MapPin /> {event.location}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="button-trans mt-10">View All</button>
    </section>
  );
}

export default Events;
