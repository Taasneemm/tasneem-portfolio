"use client";

import WorkDescription from "@/components/work/WorkDescription";
import catalogTweetsMainImg from "@/../public/catalogTweets/catalogTweets-main.png";
import catalogTweets1Vid from "@/../public/catalogTweets/catalogTweets-1.mp4";
import NextCell from "@/components/shared/NextCell";
import { motion } from "framer-motion";
import TextBlock from "@/components/shared/TextBlock";
import LinksCell from "@/components/work/LinkCells";

export default function CatalogTweets() {
  return (
    <>
      {/* Hero */}
      <div className="h-[600px] md:h-[659px] lg:h-[739px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-catalog-tweets">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">
                Catalog Twitter contents.
              </h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                A web app to record, analyze, and visualize tweets for insightful social media tracking.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Developer"]}
              timeline={["2021"]}
              frontend={["HTML + CSS + JS"]}
              backend={["Flask + MongoDB (via PyMongo)"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            src={catalogTweetsMainImg.src}
            alt="Image of the Catalog Tweets project"
            className="max-h-[200px] md:max-h-[419px] object-contain"
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
          heading="Twitter Catalog System"
          body={[
            "A lightweight Flask-based web application that allows users to register, log in, and catalog tweets based on structured metadata. The app supports both manual and batch tweet uploads using CSV, stores records in a MongoDB database, and visualizes tweet trends over time using Chart.js. Built with vanilla HTML/CSS/JavaScript on the frontend and Flask on the backend, the project demonstrates a full-stack approach to social media data management and analysis."
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
              <source src={catalogTweets1Vid} type="video/mp4" />
            </video>
          </div>
          <p className="b2 text-neutral-600 dark:text-neutral-400 text-center">
            ☝🏻 Twitter catalog system in action.
          </p>
        </div>

        <TextBlock
          heading="Updates"
          body={[
            "I'll be refactoring the codebase to align with best practices for maintainability and modular design."
          ]}
        />

        <LinksCell
          github="https://github.com/Taasneemm/twitter-catalog-system"
        />
        
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Tweets Data Analysis"
        prevLink="/tweetsDataAnalysis"
        nextText="Drop Dodge"
        nextLink="/dropDodge"
      />
    </>
  );
}
