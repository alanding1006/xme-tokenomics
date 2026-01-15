import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

interface InteractiveParticleProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  depth: number; // 0.1 to 1, where 1 is closest (moves most)
}

export default function InteractiveParticle({ mouseX, mouseY, depth }: InteractiveParticleProps) {
  // Random initial position
  const initialX = useRef(Math.random() * 100);
  const initialY = useRef(Math.random() * 100);
  const size = useRef(Math.random() * 3 + 1); // 1px to 4px
  
  // Parallax movement based on mouse position and depth
  // The deeper (smaller depth value), the less it moves
  const x = useTransform(mouseX, [-0.5, 0.5], [-20 * depth, 20 * depth]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-20 * depth, 20 * depth]);
  
  // Smooth out the movement
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  return (
    <motion.div
      className="absolute rounded-full bg-white/20"
      style={{
        left: `${initialX.current}%`,
        top: `${initialY.current}%`,
        width: size.current,
        height: size.current,
        x: smoothX,
        y: smoothY,
        opacity: Math.random() * 0.5 + 0.1,
      }}
      animate={{
        y: [0, -20, 0], // Gentle floating animation on top of parallax
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
