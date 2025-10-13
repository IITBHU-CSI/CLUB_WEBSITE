import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import gsap from "gsap";

export const VerticalOrbit = ({ members, verticalType }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shellRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused && members.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % members.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, members.length]);

  // Enhanced animations with GSAP
  useEffect(() => {
    if (shellRef.current) {
      // Animate the shell with a subtle pulse and rotation
      gsap.to(shellRef.current, {
        rotation: 360,
        duration: 40,
        ease: "none",
        repeat: -1
      });

      // Floating animation for shell
      gsap.to(shellRef.current, {
        y: -10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }
  }, []);

  const getGradientClass = () => {
    // All verticals now use the same gradient as outreach
    return 'bg-gradient-to-br from-orange-100 via-amber-50 to-yellow-100';
  };

  const getShellGradient = () => {
    return 'bg-gradient-to-br from-amber-200/80 via-orange-50/60 to-yellow-300/70';
  };

  const currentMember = members[currentIndex] || members[0];

  return (
    <div className="relative w-full min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50/30 to-yellow-50">
      {/* Enhanced Left Shell Section */}
      <div className="w-1/2 h-[600px] relative flex items-center justify-center">
        {/* Circular Shell Container */}
        <div 
          ref={shellRef}
          className="relative w-[500px] h-[500px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Outer Ring */}
          <div className={`absolute inset-0 rounded-full ${getShellGradient()} border-8 border-white/80 shadow-2xl backdrop-blur-sm`}>
            {/* Inner Ring */}
            <div className="absolute inset-20 rounded-full bg-gradient-to-br from-white/90 to-amber-100/80 border-4 border-white/60 shadow-inner">
              {/* Active Member Display in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className={`w-32 h-32 rounded-full ${getGradientClass()} flex items-center justify-center text-4xl font-bold shadow-xl border-4 border-white/80 transition-all duration-500 cursor-pointer hover:scale-110`}
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % members.length)}
                >
                  {currentMember?.name.charAt(0)}
                </div>
              </div>

              {/* Vertical Name in Inner Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-amber-900/20 mb-2 font-poppins">
                    {verticalType.toUpperCase()}
                  </p>
                  <p className="text-sm text-amber-800/60 font-medium">
                    {members.length} Members
                  </p>
                </div>
              </div>
            </div>

            {/* Orbiting Elements - Enhanced */}
            <div className="absolute inset-0">
              {members.map((member, index) => {
                const angle = (index * (360 / members.length));
                const radius = 180; // Distance from center
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <div
                    key={member.id}
                    className="absolute top-1/2 left-1/2 cursor-pointer group"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div
                      className={`
                        w-16 h-16 rounded-full 
                        ${getGradientClass()}
                        flex items-center justify-center
                        text-lg font-bold text-amber-900
                        shadow-lg
                        backdrop-blur-sm
                        border-2 border-amber-200/70
                        transition-all duration-300
                        ${currentIndex === index ? 'scale-125 ring-2 ring-amber-500 shadow-xl' : 'hover:scale-110'}
                        group-hover:shadow-2xl
                      `}
                    >
                      {member.name.charAt(0)}
                    </div>
                    
                    {/* Name tooltip on hover */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-amber-900/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        {member.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Animated Glow Effects - Updated colors */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/10 via-transparent to-amber-400/10 animate-pulse" />
          </div>

          {/* Floating Particles - Updated colors */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-amber-400/40 rounded-full animate-float"
                style={{
                  left: `${20 + (i * 10)}%`,
                  top: `${30 + (i * 5)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + (i * 0.5)}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Hints */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-amber-800/70 animate-pulse">
            Click on orbits or center to navigate • Hover to pause
          </p>
        </div>
      </div>

      {/* Enhanced Right Content Section - Fixed overflow */}
      <div className="w-1/2 h-[600px] flex items-center justify-center px-12 overflow-hidden">
        <div 
          className="w-full max-w-lg space-y-6 backdrop-blur-xl bg-gradient-to-br from-white/90 to-amber-50/80 p-12 rounded-3xl border-2 border-amber-200/60 shadow-2xl transition-all duration-700 hover:shadow-3xl hover:scale-105"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Enhanced Member Avatar */}
          <div className="flex justify-center">
            <div 
              className={`
                w-64 h-64 rounded-full 
                ${getGradientClass()}
                flex items-center justify-center
                text-8xl font-bold text-amber-900
                shadow-2xl
                backdrop-blur-sm
                border-4 border-amber-200/80
                relative
                transition-all duration-700
                animate-fade-in
                hover:shadow-3xl
              `}
            >
              {currentMember?.name.charAt(0)}
              
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-amber-400/20 animate-ping" 
                   style={{ animationDuration: '3s' }} />
            </div>
          </div>

          {/* Enhanced Member Info */}
          <div className="text-center space-y-4 animate-fade-in">
            <div className="border-b-2 border-amber-400/20 pb-4 mb-4">
              <h2 className="text-4xl font-bold font-poppins text-amber-900 bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                {currentMember?.name}
              </h2>
            </div>
            
            <p className="text-xl text-amber-800/80 font-medium bg-amber-100/50 py-2 px-4 rounded-full inline-block border border-amber-200/50">
              {currentMember?.position}
            </p>
            
            {/* Enhanced Contact Buttons */}
            <div className="flex justify-center gap-4 pt-6">
              {currentMember?.contact?.linkedin && (
                <a
                  href={currentMember.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white border-2 border-amber-400 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-md group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              )}
              {currentMember?.contact?.email && (
                <a
                  href={`mailto:${currentMember.contact.email}`}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white border-2 border-amber-400 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-md group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              )}
              {currentMember?.contact?.phone && (
                <a
                  href={`tel:${currentMember.contact.phone}`}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white border-2 border-amber-400 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-md group"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="pt-4">
              <div className="flex justify-center items-center space-x-2">
                {members.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-amber-600 scale-125' 
                        : 'bg-amber-300/50 hover:bg-amber-500/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};