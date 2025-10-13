import { useEffect, useRef } from "react";
import gsap from "gsap";

export const VerticalSwitcher = ({ selectedVertical, onVerticalChange }) => {
  const buttonsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      buttonsRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, []);

  const verticals = [
    { id: "esp", label: "ESP" },
    { id: "sde", label: "SDE" },
    { id: "ai", label: "AI/ML" },
    { id: "outreach", label: "Outreach" },
  ];

  return (
    <div className="py-12 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 font-poppins">
          Our Verticals
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {verticals.map((vertical, index) => (
            <button
              key={vertical.id}
              ref={(el) => (buttonsRef.current[index] = el)}
              onClick={() => onVerticalChange(vertical.id)}
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 ${
                selectedVertical === vertical.id
                  ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                  : "bg-background text-foreground hover:bg-accent hover:text-accent-foreground hover:scale-105"
              }`}
            >
              {vertical.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
