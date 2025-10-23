import React, { useRef, useEffect, useState } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { teamData } from "../data/teamData";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-100">
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

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        
        <div className="mb-6 sm:mb-8 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center p-3 sm:p-4 border-4 border-amber-200">
          <img 
            src="/Images/csi-logo.png" 
            alt="CSI Logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-full bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold';
              fallback.textContent = 'CSI';
              e.target.parentNode.appendChild(fallback);
            }}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6">
          <span className="text-[#880163] w">
            CSI
          </span>
        </h1>

        <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 h-12 sm:h-16 md:h-20 flex items-center justify-center">
          <Typewriter
            words={[
              "Meet Our Amazing Team",
              "Club of Sustainability and Innovation", 
              "The People Powering Innovation",
              "Collaboration that Drives Change",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2000}
          />
        </div>

        <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-3 sm:mb-4 font-semibold">
            Driving innovation and sustainability forward
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Meet the passionate individuals behind our mission to create a sustainable future through technology and innovation
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 w-full max-w-md sm:max-w-none justify-center items-center">
          <button 
            onClick={() => {
              const teamSection = document.getElementById('team');
              if (teamSection) {
                teamSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-[#880163] to-[#ae0080d3] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-[#ae0080d3] hover:to-[#880163] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 active:shadow-lg text-sm sm:text-base"
          >
            Meet Our Team
          </button>
          {/* <button 
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.open('/about', '_self');
              }
            }}
            className="border-2 border-amber-600 text-amber-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 bg-amber-50/80 backdrop-blur-sm text-sm sm:text-base"
          >
            Our Mission
          </button> */}
          {/* <button 
            onClick={() => {
              window.open('/events', '_self');
            }}
            className="border-2 border-green-600 text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 bg-green-50/80 backdrop-blur-sm text-sm sm:text-base"
          >
            Join Us
          </button> */}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-2xl w-full">
          {[
            { number: '50+', label: 'Active Members' },
            { number: '20+', label: 'Projects' },
            { number: '15+', label: 'Events' },
            { number: '5+', label: 'Years Running' },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 ">
        <div 
          onClick={() => window.scrollBy({ top: window.innerHeight - 50, behavior: 'smooth' })}
          className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center cursor-pointer hover:border-amber-600 transition-colors group"
        >
          <div className="w-1 h-3 bg-gray-700 rounded-full mt-2 animate-bounce group-hover:bg-amber-600 transition-colors"></div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-4 h-4 bg-amber-400 rounded-full opacity-70 animate-pulse hidden sm:block"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-pulse delay-75 hidden sm:block"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-amber-300 rounded-full opacity-80 animate-pulse delay-150 hidden sm:block"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-gray-400 rounded-full opacity-70 animate-pulse delay-300 hidden sm:block"></div>

      <div className="absolute top-10 left-5 w-3 h-3 bg-amber-400 rounded-full opacity-70 animate-pulse sm:hidden"></div>
      <div className="absolute bottom-10 right-5 w-3 h-3 bg-orange-400 rounded-full opacity-60 animate-pulse delay-75 sm:hidden"></div>

      <style jsx>{`
        .Typewriter__cursor {
          color: #d97706;
          font-weight: bold;
        }

        @media (max-width: 640px) {
          .container {
            padding-top: 1rem;
            padding-bottom: 2rem;
          }
        }

        button {
          cursor: pointer;
          min-height: 44px;
        }

        button:focus {
          outline: 2px solid #d97706;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
};

export const HelmHero = ({ helms }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return;

    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out" 
      }
    );

    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0.6 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [helms]);

  const sortedHelms = [...(helms || [])].sort((a, b) => {
    if (a.position === "Secretary") return -1;
    if (b.position === "Secretary") return 1;
    return 0;
  });

  const [secretary, ...jointSecretaries] = sortedHelms;
  
  const getDisplayHelms = () => {
    if (windowWidth < 768) {
      return [secretary, ...jointSecretaries];
    } else if (windowWidth < 1024) {
      return [secretary, ...jointSecretaries];
    } else {
      return jointSecretaries.length >= 2 
        ? [jointSecretaries[0], secretary, jointSecretaries[1]]
        : [secretary, ...jointSecretaries];
    }
  };

  const displayHelms = getDisplayHelms();

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 font-poppins text-amber-900">
          Meet The Helm
        </h2>
        <p className="text-center text-amber-700/80 mb-16 text-lg max-w-2xl mx-auto">
          Leading CSI with vision and dedication
        </p>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {displayHelms.map((member, index) => (
            <MemberCard 
              key={member?.id ?? index}
              member={member}
              index={index}
              ref={(el) => {
                if (el && !cardsRef.current.includes(el)) {
                  cardsRef.current[index] = el;
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const MemberCard = ({ member, index, ref }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        }
      });

      tl.fromTo(cardRef.current, 
        { 
          y: 80, 
          opacity: 0, 
          scale: 0.8,
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.2)"
        }
      );

      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(cardRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });

      cardRef.current.addEventListener("mouseenter", () => hoverTl.play());
      cardRef.current.addEventListener("mouseleave", () => hoverTl.reverse());

    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <div
      ref={ref || cardRef}
      className="group w-80 bg-white rounded-2xl border border-amber-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
    >
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
        {member?.image ? (
          <img 
            ref={imageRef}
            src={member.image} 
            alt={member.name}
  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-8xl font-bold text-amber-300">
              {member?.name?.charAt(0) || "?"}
            </div>
          </div>
        )}
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-black font-poppins mb-4">
          {member?.name || "Unknown Member"}
        </h3>
        
        <div className="flex justify-center gap-4">
          {member?.contact?.email && (
            <a
              href={`mailto:${member.contact.email}`}
              className="w-12 h-12 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 hover:text-black hover:scale-110 transition-all duration-300 group/icon"
              title="Send Email"
            >
              <Mail className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
            </a>
          )}
          
          {member?.contact?.linkedin && (
            <a
              href={member.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 hover:text-black hover:scale-110 transition-all duration-300 group/icon"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover/icon:scale-110 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const VerticalSection = ({ members, verticalType }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const themeBackgrounds = {
    esp: {
      component: <ESPRobotBackground />,
      gradient: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
      info: { title: "ESP Team", subtitle: "Enviornment, Society & Planet" }
    },
    sde: {
      component: <SDECodeRainBackground />,
      gradient: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
      info: { title: "SDE Team", subtitle: "Software Development Excellence" }
    },
    ai: {
      component: <AIBrainBackground />,
      gradient: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
      info: { title: "AI/ML Team", subtitle: "Artificial Intelligence & Machine Learning" }
    },
    outreach: {
      component: <OutreachNetworkBackground />,
      gradient: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
      info: { title: "Outreach Team", subtitle: "Community & Communication" }
    },
    creative: {
      component: <DesignMediaBackground />,
      gradient: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
      info: { title: "Creative Team", subtitle: "Crafting Visual Excellence" }
    }
  };

  const theme = themeBackgrounds[verticalType] || themeBackgrounds.esp;

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
      tl.fromTo(titleRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      tl.fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.4");
    }, sectionRef);
    return () => ctx.revert();
  }, [verticalType]);

  return (
    <section 
      ref={sectionRef} 
      className={`relative min-h-screen flex flex-col items-center justify-center py-24 px-6 ${theme.gradient} overflow-hidden`}
    >
      {theme.component}
      
      <div className="text-center mb-16 relative z-10">
        <h2 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-4">
          {theme.info.title}
        </h2>
        <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground">
          {theme.info.subtitle}
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mx-auto px-4 relative z-10">
        {members.map((member, index) => (
          <MemberCard key={member?.id ?? index} member={member} index={index} />
        ))}
      </div>
    </section>
  );
};

const AIBrainBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="ai-neural" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="8" fill="none" stroke="#d97706" strokeWidth="2">
              <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="100" r="6" fill="none" stroke="#f59e0b" strokeWidth="2">
              <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="150" r="10" fill="none" stroke="#ea580c" strokeWidth="2">
              <animate attributeName="r" values="10;14;10" dur="5s" repeatCount="indefinite" />
            </circle>
            
            <line x1="50" y1="50" x2="150" y2="100" stroke="#d97706" strokeWidth="1" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="150" y1="100" x2="100" y2="150" stroke="#f59e0b" strokeWidth="1" opacity="0.6">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
            </line>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ai-neural)" />
      </svg>

      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute floating-ai"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + i * 3}s`
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-20">
            <path d="M20 8 L25 15 L35 15 L27 20 L30 30 L20 25 L10 30 L13 20 L5 15 L15 15 Z" 
                  fill="none" stroke="#ea580c" strokeWidth="1.5">
              <animate attributeName="fill" values="none;#fed7aa;none" dur="3s" repeatCount="indefinite" />
            </path>
            <circle cx="20" cy="20" r="2" fill="#f59e0b">
              <animate attributeName="r" values="2;3;2" dur="1s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      ))}

      {[...Array(25)].map((_, i) => (
        <div
          key={`binary-${i}`}
          className="absolute binary-rain text-amber-600 font-mono text-xs opacity-40"
          style={{
            left: `${(i * 4)}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 8}s`
          }}
        >
          {Math.random() > 0.5 ? '1010' : '0101'}
        </div>
      ))}

      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-30"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `ai-float ${Math.random() * 10 + 15}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      ))}

      <style jsx>{`
        .floating-ai {
          animation: ai-float 20s ease-in-out infinite;
        }

        .binary-rain {
          animation: binary-fall 10s linear infinite;
        }

        @keyframes ai-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-40px) rotate(0deg);
          }
          75% {
            transform: translateY(-20px) rotate(-5deg);
          }
        }

        @keyframes binary-fall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }

        @keyframes ai-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -30px) rotate(90deg);
            opacity: 0.1;
          }
          50% {
            transform: translate(40px, -20px) rotate(180deg);
            opacity: 0.3;
          }
          75% {
            transform: translate(20px, -40px) rotate(270deg);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

const SDECodeRainBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute code-column"
          style={{
            left: `${(i * 4)}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        >
          {[...Array(15)].map((_, j) => (
            <div
              key={j}
              className="code-character text-amber-600 opacity-60 font-mono text-sm"
              style={{
                animationDelay: `${j * 0.3 + Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      ))}

      <div className="absolute top-8 left-8 code-window-group">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-amber-300/40 p-3 shadow-2xl transform -rotate-3">
          <div className="text-amber-700/80 font-mono text-xs space-y-1">
            <div className="flex">
              <span className="text-orange-600/70 mr-3">1</span>
              <span>const innovate = () =&gt; {'{'}</span>
            </div>
            <div className="flex ml-4">
              <span className="text-orange-600/70 mr-3">2</span>
              <span>return futureTech;</span>
            </div>
            <div className="flex">
              <span className="text-orange-600/70 mr-3">3</span>
              <span>{'}'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-12 right-10 code-window-group">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-yellow-300/40 p-3 shadow-2xl transform rotate-2">
          <div className="text-yellow-700/80 font-mono text-xs space-y-1">
            <div className="flex">
              <span className="text-amber-600/70 mr-3">1</span>
              <span>class Developer {'{'}</span>
            </div>
            <div className="flex ml-4">
              <span className="text-amber-600/70 mr-3">2</span>
              <span>build() {'{'}...{'}'}</span>
            </div>
            <div className="flex">
              <span className="text-amber-600/70 mr-3">3</span>
              <span>{'}'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-10 code-window-group">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-orange-300/40 p-3 shadow-2xl transform rotate-1">
          <div className="text-orange-700/80 font-mono text-xs space-y-1">
            <div className="flex">
              <span className="text-amber-600/70 mr-3">1</span>
              <span>function deploy() {'{'}</span>
            </div>
            <div className="flex ml-4">
              <span className="text-amber-600/70 mr-3">2</span>
              <span>launch(product);</span>
            </div>
            <div className="flex">
              <span className="text-amber-600/70 mr-3">3</span>
              <span>{'}'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-8 code-window-group">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg border border-amber-400/40 p-3 shadow-2xl transform -rotate-2">
          <div className="text-amber-800/80 font-mono text-xs space-y-1">
            <div className="flex">
              <span className="text-yellow-600/70 mr-3">1</span>
              <span>async function code() {'{'}</span>
            </div>
            <div className="flex ml-4">
              <span className="text-yellow-600/70 mr-3">2</span>
              <span>await createMagic();</span>
            </div>
            <div className="flex">
              <span className="text-yellow-600/70 mr-3">3</span>
              <span>{'}'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-24 left-24 code-window-group">
        <div className="bg-white/30 backdrop-blur-sm rounded border border-amber-400/30 p-2 shadow-xl transform rotate-1">
          <div className="text-amber-700/70 font-mono text-[10px]">
            <div>npm start</div>
            <div className="text-amber-900/60">$ Running...</div>
          </div>
        </div>
      </div>

      <div className="absolute top-28 right-28 code-window-group">
        <div className="bg-white/30 backdrop-blur-sm rounded border border-yellow-400/30 p-2 shadow-xl transform -rotate-1">
          <div className="text-yellow-700/70 font-mono text-[10px]">
            <div>git commit</div>
            <div className="text-yellow-900/60">✓ Done</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 left-28 code-window-group">
        <div className="bg-white/30 backdrop-blur-sm rounded border border-orange-400/30 p-2 shadow-xl transform -rotate-1">
          <div className="text-orange-700/70 font-mono text-[10px]">
            <div>docker build</div>
            <div className="text-orange-900/60">→ Building...</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-24 code-window-group">
        <div className="bg-white/30 backdrop-blur-sm rounded border border-amber-500/30 p-2 shadow-xl transform rotate-1">
          <div className="text-amber-800/70 font-mono text-[10px]">
            <div>yarn deploy</div>
            <div className="text-amber-900/60">↑ Deploying</div>
          </div>
        </div>
      </div>

      {[...Array(4)].map((_, i) => (
        <div
          key={`terminal-${i}`}
          className="absolute terminal-window bg-white/30 backdrop-blur-sm rounded-lg border border-amber-500/40 p-3 shadow-2xl"
          style={{
            width: `${140 + Math.random() * 60}px`,
            left: `${15 + (i * 20)}%`,
            top: `${35 + (i * 10)}%`,
            animation: `terminal-float ${15 + i * 3}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`
          }}
        >
          <div className="text-amber-800/90 font-mono text-xs">
            <div className="flex justify-between items-center mb-2">
              <span className="text-amber-700/70">terminal_{i + 1}</span>
              <span className="text-amber-900/50 text-[10px]">● ● ●</span>
            </div>
            <div className="space-y-1">
              <div className="flex">
                <span className="text-amber-900/60 mr-2">$</span>
                <span className="text-amber-800">{['npm run dev', 'git push', 'yarn build', 'docker compose up'][i]}</span>
              </div>
              <div className="text-amber-900/50 text-[10px]">
                {['Starting server...', 'Pushing to main...', 'Building bundle...', 'Starting containers...'][i]}
              </div>
            </div>
          </div>
        </div>
      ))}

      {[...Array(30)].map((_, i) => (
        <div
          key={`binary-${i}`}
          className="absolute text-amber-600/50 font-mono text-xs"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `binary-float ${Math.random() * 15 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 8}s`
          }}
        >
          {Math.random() > 0.5 ? '1010' : '0101'}
        </div>
      ))}

      <style jsx>{`
        .code-column {
          animation: code-fall linear infinite;
        }

        .code-window-group {
          animation: window-glow 6s ease-in-out infinite;
        }

        .terminal-window {
          border-left: 3px solid;
          border-image: linear-gradient(to bottom, #f59e0b, #d97706) 1;
        }

        @keyframes code-fall {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes code-glow {
          0% {
            opacity: 0.4;
            text-shadow: 0 0 5px #f59e0b;
          }
          100% {
            opacity: 0.8;
            text-shadow: 0 0 15px #f59e0b, 0 0 20px #f59e0b;
          }
        }

        @keyframes window-glow {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rotation, 0deg));
            opacity: 0.8;
          }
          50% {
            transform: translateY(-5px) rotate(calc(var(--rotation, 0deg) + 1deg));
            opacity: 1;
          }
        }

        @keyframes terminal-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-15px) translateX(10px);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
            opacity: 0.7;
          }
          75% {
            transform: translateY(10px) translateX(8px);
            opacity: 0.8;
          }
        }

        @keyframes binary-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translate(10px, -20px) rotate(180deg);
            opacity: 0.2;
          }
        }

        @media (max-width: 768px) {
          .code-window-group {
            transform: scale(0.8);
          }
          .terminal-window {
            width: 120px !important;
          }
        }
      `}</style>
    </div>
  );
};

const ESPRobotBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute event-robot"
          style={{
            left: `${15 + (i * 14)}%`,
            top: `${25 + (i * 9)}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${12 + i * 2}s`
          }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" className="opacity-25">
            <rect x="15" y="20" width="20" height="18" rx="3" fill="none" stroke="#4f46e5" strokeWidth="2" />
            <rect x="20" y="15" width="10" height="6" rx="2" fill="none" stroke="#6366f1" strokeWidth="1.5" />
            <polygon points="25,10 28,15 22,15" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="1">
              <animate attributeName="fill" values="#8b5cf6;#c4b5fd;#8b5cf6" dur="2s" repeatCount="indefinite" />
            </polygon>
            <circle cx="18" cy="25" r="1" fill="#f59e0b">
              <animate attributeName="cy" values="25;20;25" dur="1.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="32" cy="25" r="1" fill="#ef4444">
              <animate attributeName="cy" values="25;22;25" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      ))}

      {[...Array(80)].map((_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute confetti"
          style={{
            width: '6px',
            height: '6px',
            background: ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'][i % 5],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}

      <style jsx>{`
        .event-robot {
          animation: event-bounce 15s ease-in-out infinite;
        }

        @keyframes event-bounce {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-25px) scale(1.1);
          }
          50% {
            transform: translateY(-10px) scale(1);
          }
          75% {
            transform: translateY(-30px) scale(1.05);
          }
        }

        .confetti {
          animation: confetti-fall 8s linear infinite;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const OutreachNetworkBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="network-pattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="4" fill="#d97706">
              <animate attributeName="fill" values="#d97706;#f59e0b;#d97706" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="120" cy="30" r="4" fill="#f59e0b">
              <animate attributeName="fill" values="#f59e0b;#d97706;#f59e0b" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="75" cy="100" r="4" fill="#fbbf24">
              <animate attributeName="fill" values="#fbbf24;#d97706;#fbbf24" dur="4s" repeatCount="indefinite" />
            </circle>
            
            <line x1="30" y1="30" x2="120" y2="30" stroke="#d97706" strokeWidth="1" opacity="0.6">
              <animate attributeName="stroke-width" values="1;3;1" dur="2s" repeatCount="indefinite" />
            </line>
            <line x1="30" y1="30" x2="75" y2="100" stroke="#f59e0b" strokeWidth="1" opacity="0.6">
              <animate attributeName="stroke-width" values="1;3;1" dur="2.5s" repeatCount="indefinite" />
            </line>
            <line x1="120" y1="30" x2="75" y2="100" stroke="#fbbf24" strokeWidth="1" opacity="0.6">
              <animate attributeName="stroke-width" values="1;3;1" dur="3s" repeatCount="indefinite" />
            </line>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network-pattern)" />
      </svg>

      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute communication-wave"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${30 + (i * 6)}%`,
            animationDelay: `${i * 0.8}s`
          }}
        >
          <div className="wave-circle"></div>
        </div>
      ))}

      {[...Array(12)].map((_, i) => (
        <div
          key={`social-${i}`}
          className="absolute social-icon"
          style={{
            left: `${5 + (i * 8)}%`,
            top: `${15 + (i * 7)}%`,
            animationDelay: `${i * 0.5}s`
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 flex items-center justify-center">
            <span className="text-white text-xs font-bold">+</span>
          </div>
        </div>
      ))}

      <style jsx>{`
        .communication-wave {
          animation: wave-expand 4s ease-out infinite;
        }

        .wave-circle {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #f59e0b;
          opacity: 0.7;
        }

        @keyframes wave-expand {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          100% {
            transform: scale(20);
            opacity: 0;
          }
        }

        .social-icon {
          animation: social-pulse 3s ease-in-out infinite;
        }

        @keyframes social-pulse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.4;
          }
        }
      `}</style>
    </div>
  );
};
const DesignMediaBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {[...Array(8)].map((_, i) => (
        <div
          key={`tool-${i}`}
          className="absolute design-tool"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${18 + i * 2}s`
          }}
        >
          <svg width="45" height="45" viewBox="0 0 45 45" className="opacity-30">
            {i % 4 === 0 && (
              <g>
                <rect x="10" y="10" width="25" height="25" rx="2" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" values="0,100;50,50;0,100" dur="4s" repeatCount="indefinite" />
                </rect>
                <circle cx="22.5" cy="22.5" r="3" fill="#d97706">
                  <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
            )}
            {i % 4 === 1 && (
              <g>
                <circle cx="22.5" cy="22.5" r="12" fill="none" stroke="#ea580c" strokeWidth="2">
                  <animate attributeName="stroke-dashoffset" values="0;100;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <path d="M15 15 L30 30 M30 15 L15 30" stroke="#f59e0b" strokeWidth="2">
                  <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite" />
                </path>
              </g>
            )}
            {i % 4 === 2 && (
              <g>
                <polygon points="22.5,10 35,35 10,35" fill="none" stroke="#fbbf24" strokeWidth="2">
                  <animate attributeName="stroke" values="#fbbf24;#f59e0b;#fbbf24" dur="3s" repeatCount="indefinite" />
                </polygon>
                <rect x="18" y="18" width="9" height="9" fill="#d97706" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.5s" repeatCount="indefinite" />
                </rect>
              </g>
            )}
            {i % 4 === 3 && (
              <g>
                <path d="M12 22.5 Q22.5 12 33 22.5 T12 22.5" fill="none" stroke="#eab308" strokeWidth="2">
                  <animate attributeName="stroke-dasharray" values="5,5;0,0;5,5" dur="3.5s" repeatCount="indefinite" />
                </path>
                <circle cx="22.5" cy="22.5" r="4" fill="#ea580c">
                  <animate attributeName="fill" values="#ea580c;#f59e0b;#ea580c" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>
            )}
          </svg>
        </div>
      ))}

      {[...Array(15)].map((_, i) => (
        <div
          key={`color-${i}`}
          className="absolute color-swatch rounded-lg shadow-lg"
          style={{
            width: `${30 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 30}px`,
            background: `linear-gradient(135deg, ${
              [
                '#f59e0b', '#d97706', '#ea580c', '#fbbf24', '#eab308',
                '#f97316', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5'
              ][i % 10]
            } ${
              Math.random() * 30
            }%, ${
              [
                '#eab308', '#f59e0b', '#fbbf24', '#d97706', '#ea580c',
                '#fb923c', '#f97316', '#fdba74', '#fed7aa', '#ffedd5'
              ][(i + 5) % 10]
            } ${70 + Math.random() * 30}%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `color-float ${15 + Math.random() * 15}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: 0.4
          }}
        />
      ))}

      {[...Array(12)].map((_, i) => (
        <div
          key={`typography-${i}`}
          className="absolute typography-element font-bold opacity-20"
          style={{
            fontSize: `${12 + Math.random() * 20}px`,
            color: ['#d97706', '#ea580c', '#f59e0b', '#eab308'][i % 4],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontFamily: ['serif', 'cursive', 'monospace', 'fantasy'][i % 4],
            animation: `text-float ${20 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 8}s`
          }}
        >
          {['DESIGN', 'MEDIA', 'CREATIVE', 'ART', 'UI/UX', 'BRAND', 'VISUAL', 'GRAPHIC', 'TYPE', 'LAYOUT', 'COLOR', 'STYLE'][i]}
        </div>
      ))}

      {[...Array(8)].map((_, i) => (
        <div
          key={`brush-${i}`}
          className="absolute brush-stroke"
          style={{
            width: `${80 + Math.random() * 120}px`,
            height: '8px',
            background: `linear-gradient(90deg, transparent, ${
              ['#f59e0b', '#d97706', '#ea580c', '#fbbf24'][i % 4]
            }, transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            borderRadius: '4px',
            animation: `brush-sweep ${12 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 6}s`,
            opacity: 0.3
          }}
        />
      ))}

      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 w-full h-full">
          {[...Array(144)].map((_, i) => (
            <div
              key={`grid-${i}`}
              className="border border-amber-300 rounded-sm"
            />
          ))}
        </div>
      </div>

      {[...Array(4)].map((_, i) => (
        <div
          key={`mockup-${i}`}
          className="absolute design-mockup bg-white/10 backdrop-blur-sm rounded-lg border border-amber-300/30 shadow-xl"
          style={{
            width: `${120 + Math.random() * 80}px`,
            height: `${80 + Math.random() * 60}px`,
            left: `${10 + (i * 25)}%`,
            top: `${15 + (i * 18)}%`,
            animation: `mockup-float ${18 + i * 3}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
            overflow: 'hidden'
          }}
        >
          <div className="w-full h-4 bg-gradient-to-r from-amber-400 to-yellow-500 opacity-40"></div>
          <div className="p-2">
            <div className="flex space-x-1 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-400 opacity-60"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 opacity-60"></div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, j) => (
                <div
                  key={j}
                  className="h-2 bg-gradient-to-r from-amber-300 to-yellow-400 rounded opacity-30"
                  style={{
                    animation: `pulse ${2 + j * 0.5}s ease-in-out infinite`,
                    animationDelay: `${j * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .design-tool {
          animation: design-spin-float 20s ease-in-out infinite;
        }

        .color-swatch {
          filter: blur(0.5px);
        }

        .typography-element {
          mix-blend-mode: multiply;
        }

        .brush-stroke {
          filter: blur(1px);
        }

        .design-mockup {
          border-left: 4px solid;
          border-image: linear-gradient(to bottom, #f59e0b, #d97706) 1;
        }

        @keyframes design-spin-float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(20px, -30px) rotate(90deg) scale(1.1);
            opacity: 0.5;
          }
          50% {
            transform: translate(40px, -20px) rotate(180deg) scale(1);
            opacity: 0.3;
          }
          75% {
            transform: translate(20px, -40px) rotate(270deg) scale(0.9);
            opacity: 0.5;
          }
        }

        @keyframes color-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-25px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translateY(15px) rotate(240deg) scale(0.9);
          }
        }

        @keyframes text-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-40px) rotate(5deg);
            opacity: 0.4;
          }
        }

        @keyframes brush-sweep {
          0%, 100% {
            transform: translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateX(50px) rotate(180deg);
            opacity: 0.1;
          }
        }

        @keyframes mockup-float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          25% {
            transform: translateY(-20px) rotate(1deg);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-10px) rotate(-1deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(10px) rotate(0.5deg);
            opacity: 0.8;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
};
const OurTeam = () => {
  const currentHelms = teamData.helms || [];
  const verticals = teamData.verticals || {};

  return (
    <div className="min-h-screen bg-background flex flex-col font-poppins">
      <HeroSection />

      <HelmHero helms={currentHelms} />

      {Object.keys(verticals).map((verticalId) => (
        <VerticalSection
          key={verticalId}
          verticalType={verticalId}
          members={verticals[verticalId]}
        />
      ))}

      
    </div>
  );
};

export default OurTeam;