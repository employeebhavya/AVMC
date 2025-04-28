import React from "react";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-width Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-avmc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent via-[50%] z-[5]"></div>

      {/* Container-aligned Content */}
      <div className="container1 relative z-10 h-full flex items-center">
        <div className="text-left max-w-xl">
          {/* Top Text */}
          <div className="text-white text-sm md:text-lg font-light tracking-widest mb-2 drop-shadow-sm">
            COMPASSIONATE CARE, EXCEPTIONAL EDUCATION
          </div>
          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-6xl -tracking-[3px] font-bold mb-4 leading-tight drop-shadow-md">
            Shaping Future Leaders in Medicine
          </h1>
          {/* CTA Button */}
          <button className="button-bg">Learn more</button>
        </div>
      </div>
    </div>
  );
};
