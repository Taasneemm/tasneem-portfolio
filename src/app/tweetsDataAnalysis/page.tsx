"use client";

import WorkDescription from "@/components/work/WorkDescription";
import tweetsDataAnalysisMainImg from "@/../public/tweetsDataAnalysis/tweetsDataAnalysis-main.png";
import NextCell from "@/components/shared/NextCell";
import { motion } from "framer-motion";
import TextBlock from "@/components/shared/TextBlock";
import LinksCell from "@/components/work/LinkCells";
import tweetsDataAnalysis1Vid from "@/../public/tweetsDataAnalysis/tweetsDataAnalysis-1.mp4";

export default function TweetsDataAnalysis() {
  return (
    <>
      {/* Hero */}
      <div className="h-[600px] md:h-[659px] lg:h-[739px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-tweets-data-analysis">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">
                Tweet Analyser
              </h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                Insights from social data.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Developer"]}
              timeline={["2021"]}
              backend={["Python + SQLite"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            src={tweetsDataAnalysisMainImg.src}
            alt="Image of the Tweets Data Analysis project"
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
          heading="Tweet Analyser"
          body={[
            "This project extracts tweet data from a JSON file, stores it in an SQLite database, and analyzes key entities like hashtags and mentions. Using SQL and Python, it explores tweet engagement, visualizes top hashtags, and preprocesses text for a word cloud. It also applies TF-IDF analysis to identify important terms, enabling deeper insights into tweet content and patterns."
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
              <source src={tweetsDataAnalysis1Vid} type="video/mp4" />
            </video>
          </div>
          <p className="b2 text-neutral-600 dark:text-neutral-400 text-center">
            ☝🏻 Running of code in Jupyter Notebook.
          </p>
        </div>

        <TextBlock
          heading="Updates"
          body={[
            "I'll be refactoring the codebase to align with best practices for maintainability."
          ]}
        />

        <LinksCell
          github="https://github.com/Taasneemm/data-programming"
        />
        
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Stock Calculator"
        prevLink="/stockCalculator"
        nextText="Catalog Tweets"
        nextLink="/catalogTweets"
      />
    </>
  );
}
