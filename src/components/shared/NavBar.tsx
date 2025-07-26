"use client";

import GitHubIcon from "@/icons/GitHubIcon";
import LinkedInIcon from "@/icons/LinkedInIcon";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoLightImg from "@/../public/logo-light.png";
import logoDarkImg from "@/../public/logo-dark.png";

export default function NavBar() {
  // Hooks
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variables
  const selected =
    "max-md:bg-secondary-100 max-md:dark:bg-primary-700 max-md:rounded-[16px] md:font-medium md:underline-offset-[6px] md:hover:underline-offset-[8px] md:animate-underline md:animate-opacity";
  const isWork = [
    "/",
    "/insuranceApplication",
    "/stockCalculator",
    "/tweetsDataAnalysis",
    "/catalogTweets",
    "/dropDodge",
  ].includes(pathname);
  let backgroundColor = "bg-secondary-300 dark:bg-primary-900";

  return (
    <>
      {/* Tablet + Desktop */}
      <motion.div
        initial={{ opacity: 0, y: -36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.5,
        }}
        className={`transition-colors duration-300 max-md:hidden fixed w-full z-10 py-6 px-8 lg:px-[calc((100vw-1128px)/2)] flex flex-row justify-between items-center ${
          hasScrolled && backgroundColor
        }`}
      >
        {/* Pages */}
        <div className="flex flex-row gap-8 lg:gap-12">
          <a href="/">
            <p
              className={`b2 text-neutral-900 dark:text-neutral-100 animate-opacity ${
                isWork && selected
              }`}
            >
              Work
            </p>
          </a>
          <a href="/about">
            <p
              className={`b2 text-neutral-900 dark:text-neutral-100 animate-opacity ${
                pathname === "/about" && selected
              }`}
            >
              About
            </p>
          </a>
          <a
            href="https://drive.google.com/file/d/1z_cHfwkKUlZ2jpvBr1PW9GGI_zEPgBZ8/view?usp=drive_link"
            target="_blank"
          >
            <p className="b2 text-neutral-900 dark:text-neutral-100 animate-opacity">
              Resume
            </p>
          </a>
        </div>

        {/* Logo */}
        <a
          href="/"
          className="absolute left-1/2 translate-x-[-16px] w-8 h-8 animate-opacity"
        >
          <img
            src={logoLightImg.src}
            alt="Tasneem's Logo"
            className="block dark:hidden"
          />
          <img
            src={logoDarkImg.src}
            alt="Tasneem's Logo"
            className="hidden dark:block"
          />
        </a>

        {/* Links */}
        <div className="flex flex-row gap-14 lg:gap-[72px]">
          <a href="https://github.com/Taasneemm" target="_blank">
            <GitHubIcon className="fill-neutral-900 dark:fill-neutral-100 w-5 animate-opacity" />
          </a>
          <a href="https://www.linkedin.com/in/tasneemahmadd/" target="_blank">
            <LinkedInIcon className="fill-neutral-900 dark:fill-neutral-100 w-5 animate-opacity" />
          </a>
        </div>
      </motion.div>

      {/* Mobile */}
      <div className="md:hidden fixed top-8 w-[calc(100%-32px)] left-4">
        <div className="flex flex-row justify-between items-center bg-navbar-l dark:bg-navbar-d backdrop-blur-lg py-3 px-4 rounded-[24px]">
          <a href="/">
            <p
              className={`b2 font-medium text-neutral-900 dark:text-neutral-100 py-[6px] px-4 ${
                isWork && selected
              }`}
            >
              Work
            </p>
          </a>
          <a href="/about">
            <p
              className={`b2 font-medium text-neutral-900 dark:text-neutral-100 py-[6px] px-4 ${
                pathname === "/about" && selected
              }`}
            >
              About
            </p>
          </a>
          <a
            href="https://drive.google.com/file/d/1z_cHfwkKUlZ2jpvBr1PW9GGI_zEPgBZ8/view?usp=drive_link"
            target="_blank"
          >
            <p className="b2 font-medium text-neutral-900 dark:text-neutral-100 py-[6px] px-4">
              Resume
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
