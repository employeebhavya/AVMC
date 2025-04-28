import Image from "next/image";
import React from "react";

function Chancellor() {
  return (
    <section className="py-14 bg-[#f5f5f5]">
      <div className="container1 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="col-span-2">
          <h2 className="text-4xl md:text-5xl -tracking-[3px] font-bold text-secondary mb-3">
            Chancellor&apos;s Message
          </h2>
          <p className="txt mb-3 text-justify">
            Aarupadai Veedu Medical College and Hospital offers patient care,
            diagnostic, rehabilitative, preventive and pharmacy services. With
            its fully equipped ICCU, ICU, PICU, NICU and high dependency areas,
            modular operation theatres equipped with contemporary anesthesia
            equipment, the broad and super-specialty departments of cardiology,
            urology, medical gastroenterology, plastic surgery, pediatric
            surgery and nephrology.
          </p>
          <p className="txt mb-3 text-justify">
            AVMC Hospital offers state-of-art tertiary care services to the
            people of the union territory of Pondicherry and the nearby
            districts of Tamil Nadu. Various government and third-party
            insurance schemes are also available for the benefit of the
            patients.
          </p>
          <p className="txt mb-2 font-bold">DR. A.S. Ganesan</p>
          <p className="txt text-gray-600">
            Chancellor,<br></br> Vinayaka Mission&apos;s Research Foundation
            (Deemed to be University)
          </p>
        </div>
        <div className="col-span-1">
          <Image
            src={"/chancellor.png"}
            alt="chancellor"
            width={411}
            height={475}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Chancellor;
