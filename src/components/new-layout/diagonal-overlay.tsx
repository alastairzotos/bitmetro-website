import React from "react";
import { motion } from "framer-motion";

const overlayVariants = {
  initial: {
    opacity: 0,
    x: "-30%",
    skewY: -16,
    scale: 1.12,
    filter: "blur(16px) brightness(1.6) drop-shadow(0 0 32px #00fff7)",
  },
  animate: {
    opacity: 0.95,
    x: "0%",
    skewY: -16,
    scale: 1,
    filter: "blur(2px) brightness(1.2) drop-shadow(0 0 48px #00fff7)",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: "30%",
    skewY: -16,
    scale: 1.08,
    filter: "blur(16px) brightness(1.6) drop-shadow(0 0 32px #00fff7)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const DiagonalOverlay: React.FC = () => (
  <motion.div
    className="fixed inset-0 pointer-events-none z-50"
    variants={overlayVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    style={{
      background:
        "linear-gradient(120deg, rgba(0,255,255,0.22) 0%, rgba(0,0,0,0.0) 60%, rgba(0,255,255,0.18) 100%)",
      mixBlendMode: "screen",
      boxShadow: "0 0 64px 8px #00fff7, 0 0 128px 16px #00fff7 inset",
      borderRadius: "2vw",
    }}
  />
);
