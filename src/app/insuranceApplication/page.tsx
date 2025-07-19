"use client";

import WorkDescription from "@/components/work/WorkDescription";
import insuranceApplicationMainImg from "@/../public/insuranceApplication/insuranceApplication-main.png";
import NextCell from "@/components/shared/NextCell";
import { motion } from "framer-motion";
import TextBlock from "@/components/shared/TextBlock";
import LinksCell from "@/components/work/LinkCells";

export default function InsuranceApplication() {
  return (
    <>
      {/* Hero */}
      <div className="h-[600px] md:h-[659px] lg:h-[739px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-insurance-application">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">
                Insurance Application
              </h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
              A performance-tracking and policy management platform that helps insurance agents manage policies and track revenue.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Developer"]}
              timeline={["2024"]}
              frontend={["Next.js + React", "Tailwind"]}
              backend={["Node.js", "Prisma + PostgreSQL"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            src={insuranceApplicationMainImg.src}
            alt="Image of the Insurance Application project"
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
          heading="Insurance Application"
          body={[
            "The Insurance Application is a performance-tracking and policy management platform designed for insurance agents. In the current version 1, the system allows agents to create and manage various types of insurance policies and assign clients to them. The dashboard feature provides a clear view of total revenue and active subscriptions, along with monthly breakdowns of income from policy sales. This enables agents to monitor their performance, evaluate sales activity, and make data-driven decisions to improve client engagement and product offerings."
          ]}
        />

        <TextBlock
          heading="Updates"
          body={[
            "I'll be refactoring the codebase to align with best practices for maintainability and modular design."
          ]}
        />

        <LinksCell
          github="https://github.com/Taasneemm/Tasneem-SE200-Capstone"
        />
        
      </motion.div>

      {/* Next */}
      <NextCell
        nextText="Stock Calculator"
        nextLink="/stockCalculator"
        prevText="Drop Dodge"
        prevLink="/dropDodge"
      />
    </>
  );
}
