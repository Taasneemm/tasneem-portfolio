"use client";

import WorkDescription from "@/components/work/WorkDescription";
import dropDodgeMainImg from "@/../public/dropDodge/dropDodge-main.png";
import dropDodge1Vid from "@/../public/dropDodge/dropDodge-1.mp4";
import NextCell from "@/components/shared/NextCell";
import { motion } from "framer-motion";
import TextBlock from "@/components/shared/TextBlock";
import LinksCell from "@/components/work/LinkCells";

export default function DropDodge() {
  return (
    <>
      {/* Hero */}
      <div className="h-[600px] md:h-[659px] lg:h-[739px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-drop-dodge">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">
                DropDodge
              </h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                A gesture-powered mini game built with UIKit, swipe control, and animated obstacle evasion.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Developer"]}
              timeline={["2023"]}
              frontend={["Swift + UIKit + SwiftUI"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            src={dropDodgeMainImg.src}
            alt="Image of the Drop Dodge project"
            className="max-h-[360px] md:max-h-[560px] object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 1.5 }}
        className="flex flex-col gap-12 lg:gap-20 items-center"
      >
        <TextBlock
          heading="Drop Dodge Game"
          body={[
            "DropDodge is a gesture-controlled iOS mini game where players swipe to dodge obstacles. Built with Swift, UIKit, and SwiftUI, the game combines intuitive controls, animated elements, and real-time collision detection to deliver a fun and responsive gameplay experience."
          ]}
        />

        {/* Videos */}
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-row gap-6 justify-center">
            <video
              preload="auto"
              className="w-[calc(80%-28px)] rounded-[24px] md:w-[full] md:h-[full] md:rounded-[32px]"
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
            >
              <source src={dropDodge1Vid} type="video/mp4" />
            </video>
          </div>
          <p className="b2 text-neutral-600 dark:text-neutral-400 text-center">
            ☝🏻 Drop Dodge game in action.
          </p>
        </div>

        <TextBlock
          heading="Updates"
          body={[
            "I'll be refactoring the codebase to align with best practices for maintainability and modular design."
          ]}
        />

        <LinksCell
          github="https://github.com/Taasneemm/drop-dodge-game"
        />
        
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Catalog Tweets"
        prevLink="/catalogTweets"
        nextText="Insurance Application"
        nextLink="/insuranceApplication"
      />
    </>
  );
}
