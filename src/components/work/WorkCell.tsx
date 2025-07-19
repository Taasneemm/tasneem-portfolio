"use client";

import { Project } from "@/models/enums";
import placeholderImg from "@/../public/placeholder.png";
import insuranceApplicationMainImg from "@/../public/insuranceApplication/insuranceApplication-main.png";
import stockCalculatorMainImg from "@/../public/stockCalculator/stockCalculator-main.png";
import tweetsDataAnalysisMainImg from "@/../public/tweetsDataAnalysis/tweetsDataAnalysis-main.png";
import catalogTweetsMainImg from "@/../public/catalogTweets/catalogTweets-main.png";
import dropDodgeMainImg from "@/../public/dropDodge/dropDodge-main.png";  
import { motion } from "framer-motion";

interface Props {
  project: Project;
}

export default function WorkCell({ project }: Props) {
  let src = "";
  let subtitle = "";
  let title = "";
  let imageSrc = placeholderImg;
  let imageAlt = "";
  let gradient = "";
  let imageStyle = "";

  switch (project) {
    case Project.InsuranceApplication: {
      src = "/insuranceApplication";
      subtitle = "Web App";
      title = "Insurance Application";
      imageSrc = insuranceApplicationMainImg;
      imageAlt = "Image of the insurance application project";
      gradient = "grad-insurance-application";
      imageStyle = "w-[324px] md:w-[568px] lg:w-[720px] mx-auto";
      break;
    }

    case Project.StockCalculator: {
      src = "/stockCalculator";
      subtitle = "Web App";
      title = "Stock Calculator";
      imageSrc = stockCalculatorMainImg;
      imageAlt = "Image of the stock calculator project";
      gradient = "grad-stock-calculator";
      imageStyle = "w-[324px] md:w-[568px] lg:w-[720px] mx-auto";
      break;
    }

    case Project.TweetsDataAnalysis: {
      src = "/tweetsDataAnalysis";
      subtitle = "Jupyter Notebook";
      title = "Tweets Data Analysis";
      imageSrc = tweetsDataAnalysisMainImg;
      imageAlt = "Image of the tweets data analysis project";
      gradient = "grad-tweets-data-analysis";
      imageStyle = "w-[324px] md:w-[568px] lg:w-[720px] mx-auto";
      break;
    }

    case Project.CatalogTweets: {
      src = "/catalogTweets";
      subtitle = "Web App";
      title = "Catalog Tweets";
      imageSrc = catalogTweetsMainImg;
      imageAlt = "Image of the catalog tweets project";
      gradient = "grad-catalog-tweets";
      imageStyle = "w-[324px] md:w-[568px] lg:w-[720px] mx-auto";
      break;
    }

    case Project.DropDodge: {
      src = "/dropDodge";
      subtitle = "Mobile App";
      title = "Drop Dodge";
      imageSrc = dropDodgeMainImg;
      imageAlt = "Image of the drop dodge project";
      gradient = "grad-drop-dodge";
      imageStyle = "w-[160px] md:w-[320px] lg:w-[400px] mx-auto";
      break;
    }
  }

  return (
    <a
      href={src}
      className={`${gradient} flex flex-col p-6 md:p-12 pb-0 md:pb-0 rounded-[16px] md:rounded-[24px] h-[320px] md:h-[560px] lg:h-[624px] animate-work-cell overflow-hidden gap-4 md:gap-8`}
    >
      <div className="flex flex-col gap-1 text-end">
        <p className="b1 text-neutral-700 dark:text-neutral-300">{subtitle}</p>
        <h3 className="text-neutral-900 dark:text-neutral-100">{title}</h3>
      </div>
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        src={imageSrc.src}
        alt={imageAlt}
        className={imageStyle}
      />
    </a>
  );
}
