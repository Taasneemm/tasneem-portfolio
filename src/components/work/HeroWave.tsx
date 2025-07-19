"use client";

import { motion } from "framer-motion";

export default function HeroWave() {
  return (
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
      className="flex items-center justify-center w-[84px] h-[84px] md:w-[164px] md:h-[164px] bg-primary-200 dark:bg-primary-600 rounded-full"
    >
      <motion.p
        whileHover={{
          rotate: [0, 30, 0, 30, 0],
          transition: { duration: 0.75 },
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
        className="text-[36px] md:text-[64px]"
      >
        👋🏻
      </motion.p>
    </motion.div>
  );
}
