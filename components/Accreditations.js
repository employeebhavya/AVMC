import Image from "next/image";
import React from "react";

function Accreditations() {
  return (
    <section className="h-screen py-16 bg-[url('/accred-bg.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <div className="container1 flex flex-col text-center -mt-32">
        <h2 className="text-4xl md:text-5xl -tracking-[3px] font-bold text-secondary mb-3">
          Accreditations & Rankings
        </h2>
        <Image
          src={"/accred.png"}
          alt="image"
          width={992}
          height={124}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

export default Accreditations;
