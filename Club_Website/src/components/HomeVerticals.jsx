import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconSize = 70;
const centerX = 350; 
const centerY = 300;
const radius = 220; 
const arcRadius = 210; 
const gapAboveArc = 18; 
const verticals = [
  { label: "ESP-Advisory", icon: "🤝", details: "Expert guidance from pros." },
  { label: "Outreach", icon: "👥", details: "Collaborate with peers." },
  { label: "Creative", icon: "🏆", details: "Earn recognition & prizes." },
  { label: "AI-ML", icon: "🎓", details: "Learn hot technologies." },
  { label: "SDE", icon: "🧭", details: "Find your next step." },
];

function polarToCartesian(r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
   const x = r * Math.cos(rad);
   const y= r * Math.sin(rad);
  return {x,y};
}

export default function HomeVerticals() {
  const [selected, setSelected] = useState(2); 
  const arcRef = useRef(null);
  const iconsRef = useRef([]); 
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (arcRef.current) {
      gsap.set(arcRef.current, { strokeDasharray: 2000, strokeDashoffset: 2000 });
      gsap.to(arcRef.current, {
        strokeDashoffset: 0,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    }

    const startLeft = centerX - iconSize / 2;
    const startTop = centerY - iconSize / 2;

    iconsRef.current.forEach((el, i) => {
      if (!el) return;

      const angle = (i * 180) / (verticals.length - 1); // 0..180
      const { x, y } = polarToCartesian(radius, angle);
      const finalLeft = centerX + x - iconSize / 2;
      const finalTop = centerY - y - gapAboveArc - iconSize / 2;

      const dx = finalLeft - startLeft;
      const dy = finalTop - startTop;

      gsap.set(el, { left: startLeft, top: startTop, x: 0, y: 0, scale: 0.3, opacity: 0 });

      gsap.to(el, {
        x: dx,
        y: dy,
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: i * 0.12,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill && t.kill());
    };
  }, []);

  useEffect(() => {
    if (!textRef.current) return;
    gsap.killTweensOf(textRef.current);
    gsap.fromTo(
      textRef.current,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, [selected]);

  const start = polarToCartesian(arcRadius, 180);
  const end = polarToCartesian(arcRadius, 360);
  const arcPath = `M ${centerX + start.x} ${centerY - start.y} A ${arcRadius} ${arcRadius} 0 0 1 ${centerX + end.x} ${centerY - end.y}`;

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: 500, 
        background: "white", 
        color: "#1a202c", 
        paddingTop: 30,
        paddingBottom: 50, 
      }}
    >
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: 28, 
        fontSize: 30, 
        fontWeight: 700,
        background: "linear-gradient(to right, #8B5CF6, #EC4899)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        Our Club Verticals !
      </h2>

      <div style={{ position: "relative", width: 700, height: 500, margin: "0 auto" }}>
        {verticals.map((v, i) => {
          return (
            <div
              key={v.label}
              ref={(el) => (iconsRef.current[i] = el)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(i);
              }}
              onClick={() => setSelected(i)}
              style={{
                position: "absolute",
                width: iconSize,
                height: iconSize,
                borderRadius: "50%",
                background: selected === i 
                  ? "linear-gradient(to right, #8B5CF6, #EC4899)" 
                  : "white",
                border: selected === i 
                  ? "none" 
                  : "3px solid #8B5CF6",
                color: selected === i ? "white" : "#8B5CF6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 30,
                cursor: "pointer",
                boxShadow: selected === i 
                  ? "0 0 20px rgba(139, 92, 246, 0.5)" 
                  : "0 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: selected === i ? 15 : 10,
                transition: "all 0.25s ease",
                userSelect: "none",
                willChange: "transform, box-shadow",
                padding: 6,
              }}
            >
              <div style={{ pointerEvents: "none" }}>{v.icon}</div>
            </div>
          );
        })}

        <svg width={700} height={500} style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}>
          <path
            ref={arcRef}
            d={arcPath}
            stroke="linear-gradient(to right, #8B5CF6, #EC4899)"
            strokeWidth={4}
            strokeLinecap="round"
            fill="none"
            opacity={0.8}
          />
        </svg>

        <div
          ref={textRef}
          style={{
            position: "absolute",
            left: centerX - 260 / 2, 
            top: centerY - radius/2, 
            width: 260,
            textAlign: "center",
            color: "#1a202c",
            zIndex: 5,
          }}
        >
          <div style={{ fontSize: 42 }}>{verticals[selected].icon}</div>
          <div style={{ 
            fontWeight: 700, 
            fontSize: 22, 
            marginTop: 8,
            background: "linear-gradient(to right, #8B5CF6, #EC4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            {verticals[selected].label}
          </div>
          <div style={{ marginTop: 10, fontSize: 15 }}>{verticals[selected].details}</div>
        </div>
      </div>
    </div>
  );
}