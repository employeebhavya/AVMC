import { Clock, MapPin } from "lucide-react";
import React from "react";

const Event = [
  {
    id: 1,
    date: "16",
    month: "May",
    title: "PAGE-25 Conference",
    time: "10:00 am - 5:00 pm",
    location: "Hotel Accord, Puducherry",
  },
  {
    id: 2,
    date: "25",
    month: "May",
    title: "PG Focus 2025",
    time: "9:00 am - 1:00 pm",
    location: "AVMC, Puducherry",
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
      <h2 className="text-4xl md:text-5xl -tracking-[3px] font-bold text-secondary mb-6">
        Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-32">
        {Event.map((event) => (
          <div key={event.id} className="flex gap-8 items-center">
            <div className="flex flex-col gap-1 items-center">
              <span className="text-base uppercase">{event.month}</span>
              <hr className="w-10 border-1 border-black" />
              <span className="text-4xl text-secondary">{event.date}</span>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">{event.title}</p>
              <p
                className="flex gap-2 text-base
              "
              >
                <Clock /> {event.time}
              </p>
              <p className="flex gap-2 text-base">
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
