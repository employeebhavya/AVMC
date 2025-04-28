"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  { videoUrl: "/avmc1.mp4" },
  { videoUrl: "/avmc2.mp4" },
  { videoUrl: "/avmc3.mp4" },
  { videoUrl: "/avmc1.mp4" },
  { videoUrl: "/avmc2.mp4" },
];

export default function Testimonial() {
  const videoRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const playCurrentVideo = () => {
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === currentSlide) {
            video.currentTime = 0;
            video.play().catch((error) => {
              console.log("Autoplay prevented:", error);
            });
          } else {
            video.pause();
          }
        }
      });
    };

    playCurrentVideo(); // Play/pause videos on current slide

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="container1 py-20 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-1 flex flex-col justify-between items-start flex-wrap gap-4 mb-8">
        <h2 className="text-4xl md:text-5xl -tracking-[3px] font-bold text-secondary">
          What students & faculty say about AVMC
        </h2>
        <button className="button-trans">View All</button>
      </div>
      <div className="col-span-2 overflow-hidden hidden md:block">
        <Carousel className="w-full">
          <CarouselContent
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide / 3) * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/3 flex justify-center"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoUrl}
                  className="w-full h-auto object-cover rounded"
                  muted
                  loop
                  playsInline
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="col-span-2 overflow-hidden md:hidden">
        <Carousel className="w-full">
          <CarouselContent
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentSlide / 1) * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/3 flex justify-center"
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.videoUrl}
                  className="w-full h-auto object-cover rounded"
                  muted
                  loop
                  playsInline
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
