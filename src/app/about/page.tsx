"use client";

import selfImg from "@/../public/about/self.png";
import ExperienceCell from "@/components/about/ExperienceCell";
import { Experience } from "@/models/enums";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-12 md:flex-row lg:gap-24">
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            src={selfImg.src}
            alt="Picture of Tasneem"
            className="h-[320px] md:w-[240px] md:h-[256px] lg:w-[360px] lg:h-[400px] rounded-[16px] object-cover"
          />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            className="flex flex-col gap-3 lg:gap-6"
          >
            <h3 className="text-neutral-800 dark:text-neutral-200">
              I'm a Software Engineer from Singapore.
            </h3>
            <p className="b1 text-neutral-600 dark:text-neutral-400">
              I graduated from Singapore University of Social Sciences with
              a BSc in Information Communication Technology in 2024. I'm passionate
              about leveraging technology to bring ideas to life.
            </p>
            <p className="b1 text-neutral-600 dark:text-neutral-400">
              When I'm not coding, you can find me reading business books 📖
              or working out at the gym 🏋️‍♂️.
            </p>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.25, delay: 1.5 }}
          className="flex flex-col gap-4 md:gap-0 md:relative md:h-[272px] lg:h-[336px]"
        >
          <ExperienceCell experience={Experience.MINDS} />
          <ExperienceCell experience={Experience.NCS} />
          <ExperienceCell experience={Experience.SUSS} />
          <ExperienceCell experience={Experience.CTCGlobal} />
          <ExperienceCell experience={Experience.NTU} />
        </motion.div>
      </div>
    </>
  );
}


