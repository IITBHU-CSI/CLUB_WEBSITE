import { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HelmHero = ({ helms }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return;

    // Initial animation on load
    gsap.fromTo(
      cardsRef.current,
      { 
        y: 100, 
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Scroll animation
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [helms]);

  const getGradientClass = () => {
    return 'bg-gradient-to-br from-[hsl(48,95%,92%)] to-[hsl(48,75%,87%)]';
  };

  // Ensure we have exactly 3 helms (secretary in middle)
  const sortedHelms = [...helms].sort((a, b) => {
    if (a.position === "Secretary") return -1;
    if (b.position === "Secretary") return 1;
    return 0;
  });

  const [secretary, ...jointSecretaries] = sortedHelms;
  const displayHelms = jointSecretaries.length >= 2 
    ? [jointSecretaries[0], secretary, jointSecretaries[1]]
    : [secretary, ...jointSecretaries];

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 font-poppins">
          Meet The Helms
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Leading CSI with vision and dedication
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayHelms.map((member, index) => (
            <div
              key={member.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            >
              {/* Background Image Container */}
              <div className={`relative h-[500px] ${getGradientClass()} flex items-end justify-center p-8`}>
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl font-bold opacity-20">
                    {member.name.charAt(0)}
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 text-center transform translate-y-0 group-hover:-translate-y-4 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-foreground mb-2 font-poppins">
                    {member.name}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4 font-medium">
                    {member.position}
                  </p>

                  {/* Contact buttons */}
                  <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {member.contact.linkedin && (
                      <a
                        href={member.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.contact.email && (
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.contact.phone && (
                      <a
                        href={`tel:${member.contact.phone}`}
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Phone className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};