"use client";

import HeroBubbles from "@/components/work/HeroBubbles";
import HeroWave from "@/components/work/HeroWave";
import WorkCell from "@/components/work/WorkCell";
import { Project } from "@/models/enums";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <>
      {/* Hero */}
      <div className="relative flex flex-col justify-center h-[560px] md:h-[610px]">
        <div className="flex flex-col mx-auto gap-6 lg:gap-8 text-center md:w-[513px] lg:w-[683px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            className="flex flex-col gap-1"
          >
            <h1 className="text-neutral-900 dark:text-neutral-100">
              Hi. I'm Tasneem.
            </h1>
            <h1 className="text-neutral-900 dark:text-neutral-100">
              A Software Engineer.
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            className="s2 text-neutral-600 dark:text-neutral-400"
          >
            A software engineer bridging functionality, performance, and design.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
          className="absolute left-0 bottom-0"
        >
          <HeroBubbles />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.25, delay: 1.5 }}
          className="absolute right-0 top-0"
        >
          <HeroWave />
        </motion.div>
      </div>

      {/* Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
        className="flex flex-col gap-8 md:gap-12"
      >
        <WorkCell project={Project.InsuranceApplication} />
        <WorkCell project={Project.StockCalculator} />
        <WorkCell project={Project.TweetsDataAnalysis} />
        <WorkCell project={Project.CatalogTweets} />
        <WorkCell project={Project.DropDodge} />
      </motion.div>
    </>
  );
}
