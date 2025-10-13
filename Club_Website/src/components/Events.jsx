import React from "react";
import { motion } from "framer-motion";

// Sample events data
const events = [
  {
    id: 1,
    title: "EVENT 1",
    date: "Nov 20, 2025",
    category: "Upcoming",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
    description:
      "here is description",
  },
  {
    id: 2,
    title: "EVENT 2",
    date: "Oct 5, 2025",
    category: "Past",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    description:
      "here is description",
  },
  {
    id: 3,
    title: "EVENT 3",
    date: "Dec 10, 2025",
    category: "Upcoming",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    description:
      "here is description.",
  },
  {
    id: 4,
    title: "EVENT 4",
    date: "Aug 15, 2025",
    category: "Past",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    description:
      "here is description.",
  },
   {
    id: 5,
    title: "EVENT 4",
    date: "Aug 15, 2025",
    category: "Past",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    description:
      "here is description.",
  },
   {
    id: 6,
    title: "EVENT 4",
    date: "Aug 15, 2025",
    category: "Past",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    description:
      "here is description.",
  },
];

export default function Events() {
  const upcoming = events.filter((e) => e.category === "Upcoming");
  const past = events.filter((e) => e.category === "Past");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      {/* <section className="text-center py-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"> */}
      <section className="text-center py-7 bg-[#fffdf4] text-black border-b-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Events</h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Explore our upcoming and past events that celebrate innovation,
          creativity, and collaboration.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 py-12 bg-[#fffdf4] ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          🚀 Upcoming Events
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcoming.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="px-6 py-12 bg-[#fffdf4]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          🎯 Past Events
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {past.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover opacity-90"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-orange-50 border-b-2 ">
        © 2025 Events | Club of Sustainability & Innovation
      </footer>
    </div>
  );
}
