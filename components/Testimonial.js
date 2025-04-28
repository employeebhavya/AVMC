"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";

const testimonials = [
  {
    image: "/testi-1.png",
    videoUrl: "https://www.youtube.com/embed/7X8II6J-6mU", // TED-Ed: How to practice effectively
  },
  {
    image: "/testi-2.png",
    videoUrl: "https://www.youtube.com/embed/RcGyVTAoXEU", // Crash Course: Study skills
  },
  {
    image: "/testi-3.png",
    videoUrl: "https://www.youtube.com/embed/IlU-zDU6aQ0", // Khan Academy: Introduction to biology
  },
  {
    image: "/testi-1.png",
    videoUrl: "https://www.youtube.com/embed/V5tU3PosbhA", // Harvard CS50: Introduction to Computer Science
  },
  {
    image: "/testi-2.png",
    videoUrl: "https://www.youtube.com/embed/aircAruvnKk", // 3Blue1Brown: Neural networks
  },
];

export default function Testimonial() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleVideoOpen = (url) => {
    setCurrentVideo(url);
    setIsVideoOpen(true);
  };

  const handleVideoClose = () => {
    setIsVideoOpen(false);
    setCurrentVideo("");
  };

  return (
    <section className="container1 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 flex flex-col justify-between items-start flex-wrap gap-4 mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary">
          What students & faculty say about AVMC
        </h2>
        <button className="button-trans">View All</button>
      </div>
      <div className="px-12 col-span-2">
        <Carousel>
          <CarouselContent className="-ml-10">
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-10 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full w-full relative">
                  <Image
                    src={item.image}
                    alt="Testimonial"
                    width={260}
                    height={350}
                    className="w-full h-auto object-cover"
                  />
                  <button
                    onClick={() => handleVideoOpen(item.videoUrl)}
                    className="absolute bottom-2 left-2 bg-primary p-2 rounded-full hover:bg-secondary transition-all"
                    aria-label="Play testimonial video"
                  >
                    <Play className="w-6 h-6 p-1 text-white" />
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-primary text-white rounded-none hover:bg-secondary hover:text-white" />
          <CarouselNext className="bg-primary text-white rounded-none hover:bg-secondary hover:text-white" />
        </Carousel>
      </div>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleVideoClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={currentVideo}
                className="w-full h-[500px]"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Testimonial Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
