import { useState, useRef, useEffect } from "react";

const eventsData = [
  {
    id: 1,
    month: "Aug",
    title: "CSI Foundation",
    description:
      "Club of Sustainability and Innovation was founded with a vision to create meaningful impact through technology and innovation.",
    imageUrl: "/Images/1.jpg",
  },
  {
    id: 2,
    month: "Oct",
    title: "First Tech Workshop",
    description:
      "Organized our first technical workshop on sustainable technology solutions, attracting over 100 participants.",
    imageUrl: "/Images/2.jpg",
  },
  {
    id: 3,
    month: "Dec",
    title: "Innovation Lab Setup",
    description:
      "Established our innovation lab with state-of-the-art equipment for research and development projects.",
    imageUrl: "/Images/3.jpg",
  },
  {
    id: 4,
    month: "Sep",
    title: "Sustainability Summit",
    description:
      "Hosted the first annual sustainability summit bringing together industry experts and students.",
    imageUrl: "/Images/4.jpg",
  },
  {
    id: 5,
    month: "Nov",
    title: "CanSat Atmospheric Probe Launch",
    description:
      "A compact CanSat probe reached 20km altitude, collecting vital atmospheric data for research.",
    imageUrl: "/Images/5.jpg",
  },
];

function Event() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const timelineRef = useRef(null);
  const eventRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      const timelineOffsetTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;

      // Start progress only when user scrolls to the timeline section
      const startOffset = timelineOffsetTop - windowHeight * 0.5;
      const endOffset = timelineOffsetTop + timelineHeight - windowHeight * 0.2;

      let progress = 0;
      if (scrollTop >= startOffset) {
        if (scrollTop <= endOffset) {
          progress = (scrollTop - startOffset) / (endOffset - startOffset);
        } else {
          progress = 1;
        }
      }

      setScrollProgress(Math.max(0, Math.min(1, progress)));

      // Find active event based on scroll position
      const centerY = windowHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      eventRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - centerY);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveEventIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Don't call handleScroll immediately to ensure progress starts at 0
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, #ec4899 0%, transparent 50%)
            `
          }}
        />
      </div>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold  text-[#880163] mb-4">Our Journey</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Discover the milestones that shaped our club's evolution from
          inception to innovation
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-4 relative">
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full z-10">
            {/* White background line */}
            <div className="w-full h-full bg-white border border-gray-300"></div>
            {/* Progress line */}
            <div
              className="absolute top-0 left-0 w-full transition-all duration-500 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                backgroundColor: "#880163",
              }}
            ></div>
          </div>

          {/* Events */}
          <div className="space-y-40">
            {eventsData.map((event, index) => (
              <div
                key={event.id}
                ref={(el) => (eventRefs.current[index] = el)}
                className={`relative flex items-center py-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } max-lg:flex-col max-lg:text-center`}
              >
                {/* Month Badge */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center font-bold text-white
                       transition-all duration-300 ${
                         activeEventIndex === index
                           ? "scale-110 shadow-lg"
                           : "bg-gray-400 scale-100"
                       }`}
                    style={{
                      backgroundColor:
                        activeEventIndex === index ? "#880163" : undefined,
                    }}
                  >
                    {event.month}
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "pr-20" : "pl-20"
                  } max-lg:px-8 max-lg:mt-8`}
                >
                  <div className="transition-all duration-500">
                    <h3
                      className={`text-5xl font-bold mb-8 transition-all duration-300 ${
                        activeEventIndex === index
                          ? "scale-105"
                          : "text-gray-700 scale-100"
                      }`}
                      style={{
                        color:
                          activeEventIndex === index ? "#880163" : undefined,
                      }}
                    >
                      {event.title}
                    </h3>
                    <p
                      className={`text-2xl leading-relaxed transition-all duration-300 ${
                        activeEventIndex === index
                          ? "text-gray-800 scale-105"
                          : "text-gray-600 scale-100"
                      }`}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-2/12 max-lg:hidden"></div>

                {/* Image Side */}
                <div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? "pl-20" : "pr-20"
                  } max-lg:px-8 max-lg:mt-8`}
                >
                  <div
                    className={`overflow-hidden rounded-2xl transition-all duration-500 ${
                      activeEventIndex === index
                        ? "transform scale-105 shadow-2xl"
                        : "transform scale-100 shadow-lg"
                    }`}
                  >
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
