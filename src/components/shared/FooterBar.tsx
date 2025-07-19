"use client";

import LinkedInIcon from "@/icons/LinkedInIcon";
import GitHubIcon from "@/icons/GitHubIcon";
import SunIcon from "@/icons/SunIcon";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import MoonIcon from "@/icons/MoonIcon";

export default function FooterBar() {
  // Hooks
  const [isDark, setIsDark] = useState(false);
  const [isShowing, setIsShowing] = useState(true);
  useEffect(() => {
    setIsDark(localStorage.theme === "dark");
  }, []);

  // Render
  return (
    <div className="flex flex-col items-center gap-6 md:h-[96px] md:flex-row md:items-end md:justify-between">
      <p className="b2 text-neutral-600 dark:text-neutral-400 max-md:hidden">
        Developed by Tasneem © 2025
      </p>

      {/* Toggle */}
      <div className="relative flex flex-col gap-3 justify-end h-[84px] md:absolute md:left-1/2 md:translate-x-[-50%]">
        {/* Circle */}
        <Transition show={isShowing}>
          <div
            className={`absolute top-0 animate-footer-circle bg-primary-700 dark:bg-primary-300 rounded-[24px] w-10 h-10 flex items-center justify-center ${
              isDark ? "ml-[148px]" : "ml-[38px]"
            }`}
          >
            {isDark ? (
              <MoonIcon className="dark:stroke-neutral-900 w-4" />
            ) : (
              <SunIcon className="stroke-neutral-100 w-4" />
            )}
          </div>
        </Transition>

        {/* Bars */}
        <div className="flex flex-row items-end">
          <button
            className={`flex flex-row items-end gap-6 animate-footer-bar ${
              isDark ? "" : "pt-12"
            }`}
            onClick={() => {
              setIsShowing(false);
              setTimeout(() => {
                localStorage.theme = "light";
                document.documentElement.classList.remove("dark");
                setIsDark(false);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-1/2 min-h-4 rounded-[8px] bg-neutral-800" />
            <div className="w-1 h-3/4 min-h-4 rounded-[8px] bg-neutral-800" />
            <div className="w-1 h-full min-h-4 rounded-[8px] bg-neutral-800" />
            <div className="w-1 h-3/4 min-h-4 rounded-[8px] bg-neutral-700" />
            <div className="w-1 h-1/2 min-h-4 rounded-[8px] bg-neutral-600" />
          </button>
          <button
            className={`pl-[22px] flex flex-row items-end gap-6 animate-footer-bar ${
              isDark ? "pt-12" : ""
            }`}
            onClick={() => {
              setIsShowing(false);
              setTimeout(() => {
                localStorage.theme = "dark";
                document.documentElement.classList.add("dark");
                setIsDark(true);
                setIsShowing(true);
              }, 300);
            }}
          >
            <div className="w-1 h-3/4 min-h-4 rounded-[8px] bg-neutral-500" />
            <div className="w-1 h-full min-h-4 rounded-[8px] bg-neutral-400" />
            <div className="w-1 h-3/4 min-h-4 rounded-[8px] bg-neutral-400" />
            <div className="w-1 h-1/2 min-h-4 rounded-[8px] bg-neutral-400" />
          </button>
        </div>
      </div>

      <p className="b2 text-neutral-600 dark:text-neutral-400 md:hidden">
        Developed by Tasneem © 2025
      </p>

      <div className="flex flex-row gap-8 md:gap-[56px] lg:gap-[72px]">
        <a href="https://github.com/Taasneemm" target="_blank">
          <GitHubIcon className="fill-neutral-900 dark:fill-neutral-100 w-5 animate-opacity" />
        </a>
        <a href="https://www.linkedin.com/in/tasneemahmadd/" target="_blank">
          <LinkedInIcon className="fill-neutral-900 dark:fill-neutral-100 w-5 animate-opacity" />
        </a>
      </div>
    </div>
  );
}
