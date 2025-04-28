import Image from "next/image";

const events = [
  {
    title: "Training program on Performance Management System",
    category: "Staff Welfare",
    date: "April 18, 2025",
    image: "/link1.png", // replace with actual image path
  },
  {
    title: "Workshop on Manuscript Writing & Publication Processes",
    category: "Conference",
    date: "April 18, 2025",
    image: "/link2.png", // replace with actual image path
  },
  {
    title: "World Health Day",
    category: "Student Award",
    date: "April 10, 2025",
    image: "/link3.png", // replace with actual image path
  },
  {
    title: "World Tuberculosis Day - 2025",
    category: "Conference",
    date: "March 24, 2025",
    image: "/link4.png", // replace with actual image path
  },
  {
    title: "First Aid BLS",
    category: "Outreach",
    date: "March 19, 2025",
    image: "/link5.png", // replace with actual image path
  },
  {
    title: "World Kidney Day Celebration",
    category: "CME Program",
    date: "March 11, 2025",
    image: "/link6.png", // replace with actual image path
  },
];
function DiveDeeper() {
  return (
    <section className="container1 py-14 pt-0">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <div>
          <h2 className="text-4xl md:text-5xl -tracking-[3px] font-bold text-secondary mb-3">
            Dive Deeper
          </h2>
          <p className="text-gray-600 text-base 2xl:text-xl">
            Explore our health and science news by topic.
          </p>
        </div>
        <button className="button-trans">View All</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-32 pb-20">
        {events.map((event, index) => (
          <div key={index} className="relative">
            <Image
              src={event.image}
              alt={event.title}
              width={384}
              height={216}
              className="w-full h-auto"
            />
            <div className="absolute p-4 right-0 -bottom-20 bg-white w-[80%] h-[120px]">
              <div className="flex justify-between items-center mt-3 mb-3">
                <p className="text-primary text-base capitalize">
                  {event.category}
                </p>
                <p className="text-gray-500 text-base">{event.date}</p>
              </div>
              <h3 className="text-lg leading-5 font-semibold text-secondary">
                {event.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DiveDeeper;
