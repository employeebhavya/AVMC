import { BusFront, Landmark, Map } from "lucide-react";
import Image from "next/image";
import React from "react";

function HomeCTA() {
  return (
    <section className="md:h-screen md:bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat relative flex items-center">
      <div className="w-full h-full relative flex flex-col items-center">
        <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 cursor-pointer bg-white md:w-[50%] 2xl:w-[30%] h-auto p-8">
          <h2 className="text-4xl md:text-5xl -tracking-[3px] font-bold text-secondary mb-3">
            Spanning the Bay
          </h2>
          <p className="txt mb-6 text-justify">
            AVMC is a green campus with over 33% of the available area covered
            with lush greenery. A beautiful spa, well maintained gym, media
            rooms in the hostels, a serviceable supermarket, ATM, Cafeteria and
            fast food joint inside the campus provide the creature comforts for
            the inmates.
          </p>
          <p className="txt text-primary font-semibold flex gap-2 mb-3 cursor-pointer">
            <Landmark /> View our virtual tour
          </p>
          <p className="txt text-primary font-semibold flex gap-2 mb-3 cursor-pointer">
            <BusFront /> Find transportation
          </p>
          <p className="txt text-primary font-semibold flex gap-2 cursor-pointer">
            <Map /> Get directions
          </p>
        </div>

        {/* For mobile screens, show the image */}
        <Image
          src="/1.jpg"
          alt="image"
          width={500}
          height={500}
          className="w-full h-auto object-cover md:hidden"
        />
      </div>
    </section>
  );
}

export default HomeCTA;
