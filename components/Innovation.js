import Image from "next/image";
import React from "react";

function Innovation() {
  return (
    <section className="container1 py-14 pt-0 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <Image
          src={"/innovation.png"}
          alt="innovation"
          width={614}
          height={517}
          className="w-full h-auto object-cover"
        />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
          Knowledge Meets Innovation
        </h2>
        <p className="txt">
          Aarupadai Veedu Medical College and Hospital offers patient care,
          diagnostic, rehabilitative, preventive and pharmacy services. With its
          fully equipped ICCU, ICU, PICU, NICU and high dependency areas,
          modular operation theatres equipped with contemporary anesthesia
          equipment, the broad and super-specialty departments of cardiology,
          urology, medical gastroenterology, plastic surgery, pediatric surgery
          and nephrology, AVMC Hospital offers state-of-art tertiary care
          services to the people of the union territory of Pondicherry and the
          nearby districts of Tamil Nadu. Various government and third-party
          insurance schemes are also functional in the system.
        </p>
        <button className="button-bg mt-8">Learn More</button>
      </div>
    </section>
  );
}

export default Innovation;
