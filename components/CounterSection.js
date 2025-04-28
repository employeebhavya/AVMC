import { BookUser, ClipboardList, GraduationCap, LandPlot } from "lucide-react";
import Image from "next/image";
import React from "react";

export function CounterSection() {
  return (
    <section className="container1 py-10 grid grid-cols-2 md:flex md:justify-between gap-4">
      <div className="flex items-center gap-2">
        <GraduationCap className="text-base 2xl:text-xl text-primary" />
        <span className="text-base 2xl:text-xl">1800+ Students</span>
      </div>
      <div className="flex items-center gap-2">
        <LandPlot className="text-base 2xl:text-xl text-primary" />
        <span className="text-base 2xl:text-xl">30+ Acre of Land</span>
      </div>
      <div className="flex items-center gap-2">
        <ClipboardList className="text-base 2xl:text-xl text-primary" />
        <span className="text-base 2xl:text-xl">20+ Programmes</span>
      </div>
      <div className="flex items-center gap-2">
        <BookUser className="text-base 2xl:text-xl text-primary" />
        <span className="text-base 2xl:text-xl">Top Notch Facilities</span>
      </div>
    </section>
  );
}
