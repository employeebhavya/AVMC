import Image from "next/image";
import React from "react";

function Accreditations() {
  return (
    <section className="h-screen py-16 bg-[url('/accred-bg.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <div className="container1 text-center -mt-32">
        <h2 className="text-4xl md:text-5xl -tracking-[3px] font-bold text-secondary mb-3">
          Accreditations & Rankings
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
          <Image
            src={"/accred.png"}
            alt="image"
            width={992}
            height={124}
            className="w-fit md:w-[349px] h-auto object-cover"
          />
          <Image
            src={"/accred1.png"}
            alt="image"
            width={992}
            height={124}
            className="w-fit md:w-[578px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Accreditations;
