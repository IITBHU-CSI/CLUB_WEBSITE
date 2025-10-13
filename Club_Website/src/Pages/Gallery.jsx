import React from "react";
import t1 from "../assets/Gallery_Images/img1.jpg";
import t2 from "../assets/Gallery_Images/img2.jpg";
import t3 from "../assets/Gallery_Images/img3.jpg";
import t4 from "../assets/Gallery_Images/img4.jpg";
import t5 from "../assets/Gallery_Images/img5.jpg";
import t6 from "../assets/Gallery_Images/img6.png";
import t7 from "../assets/Gallery_Images/img7.jpg";
import t8 from "../assets/Gallery_Images/img8.jpg";
import t9 from "../assets/Gallery_Images/img9.jpg";
import t10 from "../assets/Gallery_Images/img10.jpg";
import t11 from "../assets/Gallery_Images/img11.jpg";
import t12 from "../assets/Gallery_Images/img12.jpg";
import t13 from "../assets/Gallery_Images/img13.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const techEventImages = [t1, t2, t3,t10];
const culturalEventImages = [t4, t5, t6,t11];
const workshopImages = [t13, t8, t9,t12];

const events = [
  { title: "Tech Events", images: techEventImages },
  { title: "Cultural Events", images: culturalEventImages },
  { title: "Workshops", images: workshopImages },
];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="w-full py-10 px-4 md:px-12 lg:px-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-700">
          Club Gallery
        </h2>
        <div className="w-full flex justify-center">
          <div className="space-y-12">
            {events.map((event, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-semibold mb-6 text-indigo-700">
                  {event.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center place-items-center">
                  {event.images.length > 0 ? (
                    event.images.map((imgSrc, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-purple-100 to-indigo-100 hover:scale-105 transition-transform duration-300"
                      >
                        <img
                          src={imgSrc}
                          alt={`${event.title}_${i}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-gray-600 italic">
                      No images added yet for {event.title}.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
