import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const events = [
  { id: 1, title: "EVENT 1", date: "Nov 20, 2025", category: "Upcoming", image: "/Images/1.jpg", description: "Description for Event 1" },
  { id: 2, title: "EVENT 2", date: "Oct 5, 2025", category: "Past", image: "/Images/2.jpg", description: "Description for Event 2" },
  { id: 3, title: "EVENT 3", date: "Dec 10, 2025", category: "Upcoming", image: "/Images/3.jpg", description: "Description for Event 3" },
  { id: 4, title: "EVENT 4", date: "Aug 15, 2025", category: "Past", image: "/Images/4.jpg", description: "Description for Event 4" },
  { id: 5, title: "EVENT 5", date: "Jul 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "Jul 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "Jul 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "Sep 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "Jul 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "Jun 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "May 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "Apr 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "Mar 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 5, title: "EVENT 5", date: "Feb 22, 2025", category: "Past", image: "/Images/5.jpg", description: "Description for Event 5" },
  { id: 6, title: "EVENT 6", date: "Jan 10, 2025", category: "Upcoming", image: "/Images/6.jpg", description: "Description for Event 6" },
];

export default function Events() {
  const monthRefs = useRef({});
  const [activeMonth, setActiveMonth] = useState("January");
  const [isScrolling, setIsScrolling] = useState(false);

  const allMonths = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const monthGroups = allMonths.reduce((acc, month) => {
    acc[month] = [];
    return acc;
  }, {});

  events.forEach((event) => {
    const month = new Date(event.date).toLocaleString("default", { month: "long" });
    if (monthGroups[month]) monthGroups[month].push(event);
  });


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return; 
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveMonth(entry.target.dataset.month);
        });
      },
      { threshold: 0, 
    rootMargin: "-50% 0px -50% 0px",  }
    );

    allMonths.forEach((m) => {
      if (monthRefs.current[m]) observer.observe(monthRefs.current[m]);
    });

    return () => observer.disconnect();
  }, [allMonths, isScrolling]);

  const scrollToMonth = (month) => {
    setIsScrolling(true);
    setActiveMonth(month); 
    monthRefs.current[month]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => setIsScrolling(false), 700);
  };

  return (
    <div className="max-w-8xl px-6 mx-auto bg-[#fffdf4] text-gray-900">
      {/* Sticky Month Strip */}
      <div className="sticky top-0 z-20 bg-[#fffdf4] backdrop-blur-md border-b shadow-sm flex justify-center overflow-x-auto px-4 py-3 scrollbar-hide">
        <div className="flex gap-4">
          {allMonths.map((month) => (
            <motion.button
              key={month}
              onClick={() => scrollToMonth(month)}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeMonth === month
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {month}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Header */}
      <section className="text-center py-9">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Events</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 border-b-2 py-5">
          Explore our events throughout the year - celebrating innovation, collaboration & tech spirit.
        </p>
      </section>

      {/* Month-wise Events */}
      <div className="space-y-24 px-6 lg:px-20">
        {allMonths.map((month) => (
          <div
            key={month}
            ref={(el) => (monthRefs.current[month] = el)}
            data-month={month}
            className="scroll-mt-24"
          >
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
              {month} 2025
            </h2>

            {monthGroups[month].length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {monthGroups[month].map((event) => (
                  <motion.div
                    key={event.id}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                      activeMonth ===
                      new Date(event.date).toLocaleString("default", { month: "long" })
                        ? "border-blue-400 shadow-[0_0_15px_#93c5fd]"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-72 sm:h-60 md:h-72 lg:h-80 w-full object-cover"
                    />
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-1 text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                      <p className="text-gray-700 text-sm">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 italic">No events this month.</p>
            )}
          </div>
        ))}
      </div>

      <div className="py-16" />
    </div>
  );
}
