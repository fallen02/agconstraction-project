import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "motion/react";

interface SnapState {
  x: number;
  y: number;
  width: number;
  height: number;
  borderRadius: string;
}

export default function MagicCursor(): React.JSX.Element {
  // Base raw cursor coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Target coordinates for the ring (can detach to snap target)
  const ringTargetX = useMotionValue(-100);
  const ringTargetY = useMotionValue(-100);

  // 1. Center dot: high stiffness, responsive micro-spring
  const dotX = useSpring(mouseX, { stiffness: 750, damping: 35, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 750, damping: 35, mass: 0.1 });

  // 2. Trailing ring: organic inertia
  const ringX = useSpring(ringTargetX, {
    stiffness: 280,
    damping: 26,
    mass: 0.5,
  });
  const ringY = useSpring(ringTargetY, {
    stiffness: 280,
    damping: 26,
    mass: 0.5,
  });

  const [snapTarget, setSnapTarget] = useState<SnapState | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPressed, setIsPressed] = useState<boolean>(false);

  const snapTargetRef = useRef<SnapState | null>(null);
  snapTargetRef.current = snapTarget;

  useEffect(() => {
    const onMouseMove = (e: MouseEvent): void => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      if (!isVisible) setIsVisible(true);

      if (snapTargetRef.current) {
        // Subtle magnetic pull towards the cursor even when snapped
        const pullStrength = 0.18;
        const dx = clientX - snapTargetRef.current.x;
        const dy = clientY - snapTargetRef.current.y;
        ringTargetX.set(snapTargetRef.current.x + dx * pullStrength);
        ringTargetY.set(snapTargetRef.current.y + dy * pullStrength);
      } else {
        ringTargetX.set(clientX);
        ringTargetY.set(clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent): void => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // 1. Snappable elements
      const snapEl = target.closest<HTMLElement>("[data-cursor-snap]");
      if (snapEl) {
        const rect = snapEl.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(snapEl);
        const padding = 8;

        const nextSnap: SnapState = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width + padding * 2,
          height: rect.height + padding * 2,
          borderRadius: computedStyle.borderRadius || "12px",
        };

        setSnapTarget(nextSnap);
        setIsHovered(true);
        ringTargetX.set(nextSnap.x);
        ringTargetY.set(nextSnap.y);
        return;
      }

      // 2. Standard interactive elements
      const interactiveEl = target.closest<HTMLElement>(
        "button, a, input, select, textarea, [data-cursor-hover]",
      );
      if (interactiveEl) {
        setSnapTarget(null);
        setIsHovered(true);
        return;
      }

      // 3. Normal roaming
      setSnapTarget(null);
      setIsHovered(false);
    };

    const handleScroll = (): void => {
      if (!snapTargetRef.current) return;
      const activeSnap = document.querySelector<HTMLElement>(
        "[data-cursor-snap]:hover",
      );
      if (activeSnap) {
        const rect = activeSnap.getBoundingClientRect();
        const padding = 8;
        const updatedSnap: SnapState = {
          ...snapTargetRef.current,
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
        setSnapTarget(updatedSnap);
        ringTargetX.set(updatedSnap.x);
        ringTargetY.set(updatedSnap.y);
      }
    };

    const onMouseDown = (): void => setIsPressed(true);
    const onMouseUp = (): void => setIsPressed(false);
    const onMouseEnter = (): void => setIsVisible(true);
    const onMouseLeave = (): void => {
      setIsVisible(false);
      setSnapTarget(null);
      setIsHovered(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      document.body.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible, mouseX, mouseY, ringTargetX, ringTargetY]);

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
            className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference will-change-transform "
            style={{
              x: dotX,
              y: dotY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: isPressed ? 4 : 6,
              height: isPressed ? 4 : 6,
              opacity: snapTarget ? 0 : 0.9,
              scale: isPressed ? 0.7 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />

          {/* Morphing Magnetic Boundary */}
          <motion.div
            className="fixed top-0 left-0 border mix-blend-difference will-change-transform "
            style={{
              x: ringX,
              y: ringY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              width: snapTarget ? snapTarget.width : isHovered ? 32 : 32,
              height: snapTarget ? snapTarget.height : isHovered ? 32 : 32,
              borderRadius: snapTarget ? snapTarget.borderRadius : "9999px",
              scale: isPressed ? 0.92 : 1,
              backgroundColor: snapTarget
                ? "rgba(255, 255, 255, 0.12)"
                : isHovered
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(255, 255, 255, 0)",
              borderColor: snapTarget
                ? "rgba(255, 255, 255, 0.85)"
                : isHovered
                  ? "rgba(255, 255, 255, 0.6)"
                  : "rgba(255, 255, 255, 0.35)",
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
