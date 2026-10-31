import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

export default function MagicCursor(): React.JSX.Element {
  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 1. Center dot: high stiffness, immediate responsive tracking
  const dotX = useSpring(mouseX, { stiffness: 750, damping: 35, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 750, damping: 35, mass: 0.1 });

  // 2. Trailing ring: organic spring with trailing lag
  const ringX = useSpring(mouseX, { stiffness: 280, damping: 26, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 280, damping: 26, mass: 0.5 });

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent): void => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = (): void => setIsPressed(true);
    const onMouseUp = (): void => setIsPressed(false);
    const onMouseEnter = (): void => setIsVisible(true);
    const onMouseLeave = (): void => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block mix-blend-difference"
          aria-hidden="true"
        >
          {/* Precision Center Dot */}
          <motion.div
            className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference will-change-transform"
            style={{
              x: dotX,
              y: dotY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: isPressed ? 4 : 6,
              height: isPressed ? 4 : 6,
              opacity: 0.9,
              scale: isPressed ? 0.7 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />

          {/* Smooth Trailing Ring */}
          <motion.div
            className="fixed top-0 left-0 rounded-full border border-white/40 mix-blend-difference will-change-transform"
            style={{
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: 32,
              height: 32,
              scale: isPressed ? 0.85 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 24,
              mass: 0.8,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
