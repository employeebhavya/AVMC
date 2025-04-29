import { BookUser, ClipboardList, GraduationCap, LandPlot } from "lucide-react";
import Image from "next/image";
import React from "react";

export function CounterSection() {
  return (
    <section className="container1 py-14 grid grid-cols-2 md:flex md:justify-between gap-4">
      <div className="flex items-center gap-2">
        <GraduationCap className="txt text-primary" />
        <span className="text-sm md:txt 2xl:text-xl">1800+ Students</span>
      </div>
      <div className="flex items-center gap-2">
        <LandPlot className="txt text-primary" />
        <span className="text-sm md:txt 2xl:text-xl">30+ Acre of Land</span>
      </div>
      <div className="flex items-center gap-2">
        <ClipboardList className="txt text-primary" />
        <span className="text-sm md:txt 2xl:text-xl">20+ Programmes</span>
      </div>
      <div className="flex items-center gap-2">
        <BookUser className="txt text-primary" />
        <span className="text-sm md:txt 2xl:text-xl">Top Notch Facilities</span>
      </div>
    </section>
  );
}
