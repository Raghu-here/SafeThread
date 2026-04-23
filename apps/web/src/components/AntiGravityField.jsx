import React, { useRef, useEffect, useState, memo } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue
} from 'framer-motion';

// Fragment Card Config Array (static, deterministic)
const FRAGMENTS = [
  { id: 1, label: "Journal – Oct 4", subLabel: "Personal · 3 min read", top: 15, left: 10, yStart: 20, yEnd: -60, idleRotate: 1.2, floatDuration: 4.5, floatDelay: 0.2, parallaxX: 10, parallaxY: -8, zLayer: 3 },
  { id: 2, label: "Safe place", subLabel: "Reflection", top: 25, left: 30, yStart: 0, yEnd: -160, xDriftStart: -10, xDriftEnd: 30, idleRotate: -1.5, floatDuration: 5.2, floatDelay: 1.1, parallaxX: 18, parallaxY: 15, zLayer: 1 },
  { id: 3, label: "Breathing ex.", subLabel: "Exercise", top: 12, left: 60, yStart: 10, yEnd: -100, idleRotate: 1.0, floatDuration: 3.8, floatDelay: 0.5, parallaxX: -12, parallaxY: 10, zLayer: 2 },
  { id: 4, label: "Grounding 5-4-3", subLabel: "Exercise", top: 40, left: 75, yStart: 20, yEnd: -80, idleRotate: -1.2, floatDuration: 4.8, floatDelay: 1.5, parallaxX: 8, parallaxY: -12, zLayer: 3 },
  { id: 5, label: "Anchor phrase", subLabel: "Mantra", top: 60, left: 15, yStart: 0, yEnd: -160, idleRotate: 0.8, floatDuration: 4.1, floatDelay: 0.8, parallaxX: 15, parallaxY: 18, zLayer: 1 },
  { id: 6, label: "Night of Oct 6", subLabel: "Personal · 5 min read", top: 65, left: 60, yStart: 10, yEnd: -100, xDriftStart: 15, xDriftEnd: -25, idleRotate: -1.0, floatDuration: 5.5, floatDelay: 1.8, parallaxX: -15, parallaxY: -15, zLayer: 2 },
  { id: 7, label: "Letter to self", subLabel: "Reflection", top: 80, left: 30, yStart: 15, yEnd: -60, idleRotate: 1.5, floatDuration: 3.5, floatDelay: 0, parallaxX: 12, parallaxY: 12, zLayer: 3 },
  { id: 8, label: "Therapist note", subLabel: "Session notes", top: 50, left: 45, yStart: 0, yEnd: -160, idleRotate: -0.8, floatDuration: 4.2, floatDelay: 1.2, parallaxX: 20, parallaxY: -20, zLayer: 1 },
];

const zLayerConfig = {
  1: { scale: 1.0, opacity: 1, blur: "0px", zIndex: 30, stiffness: 50 },
  2: { scale: 0.92, opacity: 0.8, blur: "0.5px", zIndex: 20, stiffness: 55 },
  3: { scale: 0.82, opacity: 0.55, blur: "2px", zIndex: 10, stiffness: 65 },
};

const styles = {
  section: {
    position: 'relative',
    minHeight: '700px',
    overflow: 'hidden',
    backgroundColor: '#ffe8d6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '80px',
  },
  innerContainer: {
    position: 'absolute',
    top: '160px',
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'visible',
    pointerEvents: 'none',
  },
  headingWrap: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 500,
    color: '#6b705c',
    margin: 0,
    marginBottom: '8px',
  },
  subHeading: {
    fontSize: '16px',
    color: '#cb997e',
    margin: 0,
  },
  card: {
    position: 'absolute',
    background: 'rgba(255, 248, 243, 0.85)',
    border: '1px solid rgba(221, 190, 169, 0.6)',
    borderRadius: '28px',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    boxShadow: '0 8px 32px rgba(203, 153, 126, 0.14)',
    padding: '14px 18px',
    width: 'clamp(160px, 22vw, 220px)',
    willChange: 'transform',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    pointerEvents: 'auto',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#cb997e',
    flexShrink: 0,
  },
  label: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#6b705c',
    margin: 0,
  },
  subLabel: {
    fontSize: '11px',
    color: '#6b705c',
    opacity: 0.6,
    margin: 0,
    paddingLeft: '16px',
  }
};

const FragmentCard = memo(({ card, scrollYProgress, mouseX, mouseY, isMobile, isHoverable }) => {
  const zConfig = zLayerConfig[card.zLayer];
  const actualYEnd = isMobile ? card.yEnd / 2 : card.yEnd;

  const rawY = useTransform(scrollYProgress, [0, 1], [card.yStart, actualYEnd]);
  const hasXDrift = card.xDriftStart !== undefined && card.xDriftEnd !== undefined;
  const rawX = useTransform(scrollYProgress, [0, 1], hasXDrift ? [card.xDriftStart, card.xDriftEnd] : [0, 0]);

  const dragY = useSpring(rawY, { stiffness: zConfig.stiffness, damping: 18, mass: 1.2 });
  const dragX = useSpring(rawX, { stiffness: zConfig.stiffness, damping: 18, mass: 1.2 });

  const parallaxXRaw = useTransform(mouseX, [-1, 1], [card.parallaxX * -1, card.parallaxX]);
  const parallaxYRaw = useTransform(mouseY, [-1, 1], [card.parallaxY * -1, card.parallaxY]);
  
  const parallaxSpringX = useSpring(parallaxXRaw, { stiffness: 80, damping: 22, mass: 0.8 });
  const parallaxSpringY = useSpring(parallaxYRaw, { stiffness: 80, damping: 22, mass: 0.8 });

  const combinedX = useTransform([dragX, parallaxSpringX], ([dx, px]) => dx + (isHoverable ? px : 0));
  const combinedY = useTransform([dragY, parallaxSpringY], ([dy, py]) => dy + (isHoverable ? py : 0));

  return (
    <motion.div
      style={{
        ...styles.card,
        top: `${card.top}%`,
        left: `${card.left}%`,
        x: combinedX,
        y: combinedY,
        scale: zConfig.scale,
        opacity: zConfig.opacity,
        filter: `blur(${zConfig.blur})`,
        zIndex: zConfig.zIndex,
      }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, card.idleRotate, 0]
      }}
      transition={{
        duration: card.floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: card.floatDelay
      }}
    >
      <div style={styles.cardHeader}>
        <div style={styles.dot} />
        <p style={styles.label}>{card.label}</p>
      </div>
      <p style={styles.subLabel}>{card.subLabel}</p>
    </motion.div>
  );
});

/** Static card for reduced-motion users */
const StaticFragmentCard = ({ card, isMobile, index }) => {
  const zConfig = zLayerConfig[card.zLayer];
  const pos = isMobile
    ? { top: `${index * 20 + 2}%`, left: `${index % 2 === 0 ? 5 : 45}%` }
    : { top: `${card.top}%`, left: `${card.left}%` };

  return (
    <div
      style={{
        ...styles.card,
        ...pos,
        opacity: zConfig.opacity,
        filter: `blur(${zConfig.blur})`,
        zIndex: zConfig.zIndex,
        transform: `scale(${zConfig.scale})`,
      }}
    >
      <div style={styles.cardHeader}>
        <div style={styles.dot} />
        <p style={styles.label}>{card.label}</p>
      </div>
      <p style={styles.subLabel}>{card.subLabel}</p>
    </div>
  );
};

export default function AntiGravityField() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isHoverable, setIsHoverable] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initial state
    handleResize();

    const hoverQuery = window.matchMedia('(hover: hover)');
    setIsHoverable(hoverQuery.matches);

    const handleHoverChange = (e) => setIsHoverable(e.matches);

    window.addEventListener('resize', handleResize);
    
    if (hoverQuery.addEventListener) {
      hoverQuery.addEventListener('change', handleHoverChange);
    } else {
      hoverQuery.addListener(handleHoverChange);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (hoverQuery.removeEventListener) {
        hoverQuery.removeEventListener('change', handleHoverChange);
      } else {
        hoverQuery.removeListener(handleHoverChange);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isHoverable || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const nx = (e.clientX - centerX) / (rect.width / 2);
    const ny = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const displayFragments = isMobile ? FRAGMENTS.slice(0, 5) : FRAGMENTS;

  // Reduced motion: render static cards with no animations
  if (prefersReducedMotion) {
    return (
      <section ref={containerRef} style={styles.section}>
        <div style={styles.headingWrap}>
          <h2 style={styles.heading}>Your memories, held safely</h2>
          <p style={styles.subHeading}>Fragments find their thread</p>
        </div>
        <div style={styles.innerContainer}>
          {displayFragments.map((card, index) => (
            <StaticFragmentCard
              key={card.id}
              card={card}
              isMobile={isMobile}
              index={index}
            />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={containerRef} 
      style={styles.section}
      onMouseMove={isHoverable ? handleMouseMove : undefined}
    >
      <div style={styles.headingWrap}>
        <h2 style={styles.heading}>Your memories, held safely</h2>
        <p style={styles.subHeading}>Fragments find their thread</p>
      </div>
      
      <div style={styles.innerContainer}>
        {displayFragments.map((card, index) => {
          const responsiveCard = isMobile ? {
            ...card,
            top: index * 20 + 2,
            left: index % 2 === 0 ? 5 : 45
          } : card;
          
          return (
            <FragmentCard
              key={card.id}
              card={responsiveCard}
              scrollYProgress={scrollYProgress}
              mouseX={mouseX}
              mouseY={mouseY}
              isMobile={isMobile}
              isHoverable={isHoverable}
            />
          );
        })}
      </div>
    </section>
  );
}
