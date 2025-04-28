import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const topics = [
  {
    title: "Prof. Rakesh Sehgal",
    designation: "Dean, Aarupadai Veedu Medical College & Hospital",
    image: "/leader1.svg",
  },
  {
    title: "Prof. Sarman Singh",
    designation: "Director, Medical Research & Institutional Collaborations",
    image: "/leader2.svg",
  },
  {
    title: "Dr. Mahalakshmi VN",
    designation: "Dean (HPE), Aarupadai Veedu Medical College & Hospital",
    image: "/leader3.svg",
  },
  {
    title: "Dr. K. Jayasingh M.D.",
    designation:
      "Director Hospital Growth & Outreach Services, Aarupadai Veedu Medical College & Hospital",
    image: "/leader4.svg",
  },
  {
    title: "Prof. Rakesh Sehgal",
    designation: "Dean, Aarupadai Veedu Medical College & Hospital",
    image: "/leader1.svg",
  },
  {
    title: "Prof. Sarman Singh",
    designation: "Director, Medical Research & Institutional Collaborations",
    image: "/leader2.svg",
  },
];

function Leaders() {
  return (
    <section className="container1 py-12">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Leaders at AVMC
          </h2>
        </div>
        <button className="button-trans">View All</button>
      </div>
      <div className="px-12">
        <Carousel>
          <CarouselContent className="-ml-10 pb-28">
            {topics.map((topic, index) => (
              <CarouselItem
                key={index}
                className="pl-10 md:basis-1/2 lg:basis-1/4"
              >
                <div className="h-full w-full relative">
                  <Image
                    src={topic.image}
                    alt={topic.title}
                    width={260}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-30 left-7 p-3 w-[80%] h-[148px] bg-white">
                    <h3 className="txt font-semibold mb-1">{topic.title}</h3>
                    <p className="text-sm">
                      {topic.designation.split(",")[0]}
                      <br />
                      {topic.designation.split(",").slice(1).join(",")}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-primary text-white rounded-none hover:bg-secondary hover:text-white" />
          <CarouselNext className="bg-primary text-white rounded-none hover:bg-secondary hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
}

export default Leaders;
