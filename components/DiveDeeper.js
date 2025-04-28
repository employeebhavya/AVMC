import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const topics = [
  { title: "Autism Disorder", image: "/Link.jpg" },
  { title: "Cancer", image: "/Link1.jpg" },
  { title: "COVID - 19", image: "/Link2.jpg" },
  { title: "Genetics and Genomics", image: "/Link3.jpg" },
  { title: "Cancer", image: "/Link.jpg" },
  { title: "COVID - 19", image: "/Link1.jpg" },
];

function DiveDeeper() {
  return (
    <section className="container1 py-10 pt-0">
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
            Dive Deeper
          </h2>
          <p className="text-gray-600 text-base 2xl:text-xl">
            Explore our health and science news by topic.
          </p>
        </div>
        <button className="button-trans">View All</button>
      </div>
      <div className="px-12">
        <Carousel>
          <CarouselContent className="-ml-10">
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
                  <h3 className="font-medium text-secondary text-b 2xl:text-xl absolute bottom-0 left-0 bg-white bg-opacity-80 p-2 w-64 h-auto">
                    {topic.title}
                  </h3>
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

export default DiveDeeper;
