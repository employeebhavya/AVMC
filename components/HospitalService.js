import Image from "next/image";
import React from "react";

function HospitalService() {
  return (
    <section className="container1 py-16 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl -tracking-[3px] font-bold text-secondary mb-3">
          Hospital Services
        </h2>
        <p className="txt mb-3 text-justify">
          The Hospital is well equipped and established to serve patients with
          care and service by efficient Dialysis Unit, Lithotripsy, PUVA
          Chamber. Laparoscopy and laser instrument for general and Gynecology
          surgery.
        </p>
        <p className="txt text-justify">
          A fully operational Pharmacy, state of art Audiology and Speech
          therapy unit, wide range of Physiotherapy / Rehabilitative care
          services and a utilitarian Blood Bank along with dedicated nursing
          staff and health care professionals provide the necessary support for
          patient care services.
        </p>
      </div>
      <div className="relative w-full h-auto overflow-hidden">
        <Image
          src={"/hospital.png"}
          alt="innovation"
          width={614}
          height={517}
          className="w-full h-auto object-cover"
        />
        <button className="text-[12px] button-bg w-36 md:w-56 absolute bottom-5 left-2 md:left-10">
          View Attendance
        </button>
        <button className="text-[12px] button-bg w-36 md:w-56 absolute bottom-5 right-2 md:right-10">
          View Clinical Material
        </button>
      </div>
    </section>
  );
}

export default HospitalService;
