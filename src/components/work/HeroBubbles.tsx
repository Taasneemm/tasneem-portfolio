"use client";

import { motion } from "framer-motion";

export default function HeroBubbles() {
  return (
    <div className="relative w-[80px] h-[140px] md:w-[160px] md:h-[240px]">
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, 16, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: 0,
        }}
        className="absolute top-0 left-[40%] w-[12px] h-[12px] md:w-[24px] md:h-[24px] bg-primary-200 dark:bg-primary-800 rounded-full"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, 16, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-[25%] left-[25%] w-[20px] h-[20px] md:w-[40px] md:h-[40px] bg-primary-300 dark:bg-primary-700 rounded-full"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, 16, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[45%] left-[60%] w-[32px] h-[32px] md:w-[56px] md:h-[56px] bg-primary-400 dark:bg-primary-600 rounded-full"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{
          y: [0, 16, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-0 left-[0px] w-[48px] h-[48px] md:w-[84px] md:h-[84px] bg-primary-500 dark:bg-primary-500 rounded-full"
      />
    </div>
  );
}
