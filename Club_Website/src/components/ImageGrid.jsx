import React from "react";

const images = [
  "/Images/1.jpg",
  "/Images/2.jpg",
  "/Images/3.jpg",
  "/Images/4.jpg",
  "/Images/5.jpg",
  "/Images/6.jpg",
];

const animationClasses = ["animate-up", "animate-down", "animate-up"];

const ImageGrid = () => {
  return (
    <div className="flex gap-6 h-[450px] md:h-[530px] overflow-hidden">
      {animationClasses.map((anim, idx) => (
        <div key={idx} className="flex-1 overflow-hidden">
          <div className={`flex flex-col gap-4 ${anim}`}>
            {[...images, ...images].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="rounded-xl h-40 w-full object-cover shadow-xl"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ImageGrid;

