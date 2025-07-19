"use client";

import WorkDescription from "@/components/work/WorkDescription";
import stockCalculatorMainImg from "@/../public/stockCalculator/stockCalculator-main.png";
import NextCell from "@/components/shared/NextCell";
import { motion } from "framer-motion";
import TextBlock from "@/components/shared/TextBlock";
import LinksCell from "@/components/work/LinkCells";

export default function StockCalculator() {
  return (
    <>
      {/* Hero */}
      <div className="h-[600px] md:h-[659px] lg:h-[739px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-stock-calculator">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">
                Stock Calculator
              </h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                Stock tracking at a glance.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Developer"]}
              timeline={["2024"]}
              frontend={["React + Vite", "CSS"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            src={stockCalculatorMainImg.src}
            alt="Image of the Stock Calculator project"
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
          heading="Stock Calculator"
          body={[
            "This web application allows users to input a stock symbol, purchase price, and quantity of shares to instantly calculate their real-time profit or loss base on the purchase price at a particular moment of time in the past. The dashboard displays a detailed summary for each stock, including the purchase price, current market price, and overall gain or loss—making it easy to track investment performance at a glance."
          ]}
        />

        <TextBlock
          heading="Updates"
          body={[
            "I'll be refactoring the codebase to align with best practices for maintainability and modular design."
          ]}
        />

        <LinksCell
          github="https://github.com/Taasneemm/TasneemAhmad-Capstone"
        />
        
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Insurance Application"
        prevLink="/insuranceApplication"
        nextText="Tweet Analyser"
        nextLink="/tweetsDataAnalysis"
      />
    </>
  );
}
