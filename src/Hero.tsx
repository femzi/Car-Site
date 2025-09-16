import { useState, useEffect } from "react";
import bg1 from'./assets/carOne.svg'
import bg2 from "./assets/carTwo.svg"
import bg3 from "./assets/carThree.svg"
interface Slide {
  id: number;
  image: string;
  text: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: bg1,
    text: "Beautiful Mountain View",
  },
  {
    id: 2,
    image: bg2,
    text: "Peaceful Forest Trail",
  },
  {
    id: 3,
    image:  bg3,
    text: "Golden Sunset by the Beach",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-screen h-screen flex-shrink-0 relative group"
          >
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay that fades in on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            {/* Hover Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <p className="text-white text-3xl font-medium group-hover:font-semibold transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:tracking-wide">
                {slide.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Always-visible Text (Hero Heading) */}
      <div className="absolute inset-0 flex items-start">
        <div className="mt-24 ml-12">
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl xl:text-7xl font-bold drop-shadow-lg">
            Luxury Without Limits
          </h1>
          <p className="text-white text-sm md:text-lg mt-4 drop-shadow-md">
            A curated selection of the world's finest automobiles.
            <br />
            Unrivaled performance. Unparalleled elegance.
          </p>
            <p className="text-white text-lg hovring font-semibold mt-7 pl-10 py-5 px-5 border md:mr-120 mr-30 cursor-target"> Explore Collections  </p>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === i ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
