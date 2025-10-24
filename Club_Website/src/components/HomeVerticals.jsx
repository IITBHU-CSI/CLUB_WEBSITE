import React, { useRef, useEffect, useState } from "react"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import advisory from "/vertical_ic/advisory.png";
import sde from "/vertical_ic/coding.png";
import outreach from "/vertical_ic/outreach.png";
import ai from "/vertical_ic/ai.png";
import creative from "/vertical_ic/creative.png";

gsap.registerPlugin(ScrollTrigger);

const verticals = [
  { label: "Creative", icon: creative, details: "Earn recognition & prizes." },
  { label: "Outreach", icon: outreach, details: "Collaborate with peers." },
  { label: "ESP-Advisory", icon: advisory, details: "Expert guidance from pros." },
  { label: "AI-ML", icon: ai, details: "Learn hot technologies." },
  { label: "SDE", icon: sde, details: "Find your next step." },
];

function polarToCartesian(r, angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
}

export default function HomeVerticals() {
  const containerRef = useRef(null);
  const arcRef = useRef(null);
  const iconsRef = useRef([]);
  const textRef = useRef(null);
  const [selected, setSelected] = useState(2);
  const [dims, setDims] = useState({
    iconSize: 70,
    radius: 220,
  });

  // Update dimensions & responsive icon size
  useEffect(() => {
    const updateDims = () => {
      const containerWidth = containerRef.current?.offsetWidth || 700;
      const scale = containerWidth / 700;

      let iconSize = 70 * scale;
      let radius = 220 * scale;

      // Increase size for max-sm devices (<=640px)
      if (window.innerWidth <= 640) {
        iconSize *= 1.9; // 30% bigger icons
        radius *= 1.1;   // slightly bigger radius for spacing
      }

      setDims({ iconSize, radius });
    };

    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  // Animate icons & arc
  useEffect(() => {
    if (!arcRef.current) return;

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

    const gapAboveArc = 18 * (dims.radius / 220);
    const centerX = containerRef.current.offsetWidth / 2;
    const centerY = dims.radius + gapAboveArc;

    iconsRef.current.forEach((el, i) => {
      if (!el) return;
      const angle = (i * 180) / (verticals.length - 1);
      const { x, y } = polarToCartesian(dims.radius, angle);
      const finalLeft = centerX + x - dims.iconSize / 2;
      const finalTop = centerY - y - gapAboveArc - dims.iconSize / 2;
      const startLeft = centerX - dims.iconSize / 2;
      const startTop = centerY - dims.iconSize / 2;

      const dx = finalLeft - startLeft;
      const dy = finalTop - startTop;

      gsap.set(el, {
        left: startLeft,
        top: startTop,
        x: 0,
        y: 0,
        scale: 0.3,
        opacity: 0,
      });
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
  }, [dims]);

  // Animate selected text
  useEffect(() => {
    if (!textRef.current) return;
    gsap.killTweensOf(textRef.current);
    gsap.fromTo(
      textRef.current,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, [selected]);

  const centerX = containerRef.current?.offsetWidth / 2 || 350;
  const centerY = dims.radius + 18;
  const arcRadius = dims.radius - 10;
  const start = polarToCartesian(arcRadius, 180);
  const end = polarToCartesian(arcRadius, 360);
  const arcPath = `M ${centerX + start.x} ${
    centerY - start.y
  } A ${arcRadius} ${arcRadius} 0 0 1 ${centerX + end.x} ${centerY - end.y}`;

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full mx-auto relative pb-32 "
    >
      <div className="absolute inset-0 pointer-events-none opacity-10" />
      <h3 className="text-center mb-20 sm:mb-0 lg:mb-20 lg:pb-10 sm:pb-20  font-bold text-[clamp(1.8rem,4vw,2.5rem)] bg-gradient-to-r bg-clip-text text-[#880163]">
        Our Club Verticals
      </h3>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: dims.radius,
        }}
      >
        {verticals.map((v, i) => (
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
              width: dims.iconSize,
              height: dims.iconSize,
              borderRadius: "50%",
              background:
                selected === i
                  ? "linear-gradient(to right, #a8ff78,#78ffd6)"
                  : "white",
              border: selected === i ? "none" : "3px solid black",
              color: selected === i ? "white" : "#8B5CF6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: dims.iconSize * 0.43,
              cursor: "pointer",
              boxShadow:
                selected === i
                  ? "0 0 20px rgba(139,92,246,0.5)"
                  : "0 4px 6px rgba(0,0,0,0.1)",
              zIndex: selected === i ? 15 : 10,
              transition: "all 0.25s ease",
              userSelect: "none",
              willChange: "transform, box-shadow",
              padding: 6,
            }}
          >
            {typeof v.icon === "string" &&
            /\.(png|jpe?g|svg|webp|gif)$/i.test(v.icon) ? (
              <img
                src={v.icon}
                alt={v.label}
                style={{
                  width: "60%",
                  height: "60%",
                  objectFit: "contain",
                  pointerEvents: "none",
                  display: "block",
                }}
              />
            ) : (
              <div style={{ pointerEvents: "none", lineHeight: 1 }}>
                {v.icon}
              </div>
            )}
          </div>
        ))}

        <svg
          width="100%"
          height={dims.radius + 50}
          style={{ position: "absolute", top: 0, left: 0, overflow: "visible" }}
        >
          <path
            ref={arcRef}
            d={arcPath}
            stroke="linear-gradient(to right, #a8ff78,#78ffd6)"
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
            left: centerX - 130,
            top: centerY - dims.radius / 2,
            width: 260,
            textAlign: "center",
            color: "#1a202c",
            zIndex: 5,
          }}
        >
          <div style={{ fontSize: "clamp(2rem, 6vw, 2.5rem)" }}>
            {typeof verticals[selected].icon === "string" &&
            /\.(png|jpe?g|svg|webp|gif)$/i.test(verticals[selected].icon) ? (
              <img
                src={verticals[selected].icon}
                alt={verticals[selected].label}
                style={{
                  width: "2.2rem",
                  height: "2.2rem",
                  objectFit: "contain",
                  display: "inline-block",
                }}
              />
            ) : (
              verticals[selected].icon
            )}
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              marginTop: 8,
              color: "#880163",
            }}
          >
            {verticals[selected].label}
          </div>

          <div
            style={{ marginTop: 10, fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            {verticals[selected].details}
          </div>
        </div>
      </div>
    </div>
  );
}
