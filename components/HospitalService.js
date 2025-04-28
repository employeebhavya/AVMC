import Image from "next/image";
import React from "react";

function HospitalService() {
  return (
    <section className="container1 py-16 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
          Hospital Services
        </h2>
        <p className="txt mb-3">
          The Hospital is well equipped and established to serve patients with
          care and service by efficient Dialysis Unit, Lithotripsy, PUVA
          Chamber. Laparoscopy and laser instrument for general and Gynecology
          surgery.
        </p>
        <p className="txt">
          A fully operational Pharmacy, state of art Audiology and Speech
          therapy unit, wide range of Physiotherapy / Rehabilitative care
          services and a utilitarian Blood Bank along with dedicated nursing
          staff and health care professionals provide the necessary support for
          patient care services.
        </p>
        <button className="button-bg mt-8">Learn More</button>
      </div>
      <div>
        <Image
          src={"/hospital.png"}
          alt="innovation"
          width={614}
          height={517}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default HospitalService;
