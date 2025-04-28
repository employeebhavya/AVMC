"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";

export default function NewsTicker() {
  const newsItems = useMemo(
    () => [
      { text: "Admissions 2025-2026 - Applications Open", href: "/admissions" },
      { text: "SRMEEE (UG) 2025 - Applications Open", href: "/srmeee" },
      { text: "SRMEEM (MBA) 2025 - Applications Open", href: "/srmeem" },
      {
        text: "Law (UG Integrated) 2025 - Applications Open",
        href: "/law-admissions",
      },
    ],
    []
  ); // Empty dependency array means this only initializes once

  const containerRef = useRef(null);
  const tickerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (!containerRef.current || !tickerRef.current || isPaused) return;

    const container = containerRef.current;
    const ticker = tickerRef.current;
    const containerWidth = container.offsetWidth;
    const tickerWidth = ticker.offsetWidth;

    const calculatedDuration = Math.max(
      10,
      (tickerWidth / containerWidth) * 20
    );
    setDuration(calculatedDuration);

    ticker.style.animation = "none";
    ticker.offsetHeight;
    ticker.style.animation = `scroll ${calculatedDuration}s linear infinite`;

    return () => {
      ticker.style.animation = "none";
    };
  }, [newsItems, isPaused]); // Now newsItems is stable between renders

  return (
    <div
      className="w-full bg-primary py-3 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="relative w-full h-12 flex flex-col items-center justify-center"
      >
        <div
          ref={tickerRef}
          className={`absolute whitespace-nowrap txt1 text-white ${
            isPaused ? "animation-paused" : ""
          }`}
          style={{ animation: `scroll ${duration}s linear infinite` }}
        >
          {/* Original items */}
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="inline-block mx-8 hover:underline"
            >
              {item.text}
            </Link>
          ))}
          {/* Duplicate items for seamless looping */}
          {newsItems.map((item, index) => (
            <Link
              key={`duplicate-${index}`}
              href={item.href}
              className="inline-block mx-8 hover:underline"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animation-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
