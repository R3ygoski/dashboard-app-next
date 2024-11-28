"use client";

import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    const html = document.querySelector("html");
    html!.classList.toggle("dark");
    if (html?.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, []);

  return (
    <section className="flex justify-between items-center mt-4 lg:self-start lg:gap-x-3">
      <p className="text-sm font-bold text-main-light-text dark:text-main-dark-text">
        Dark Mode
      </p>
      <button
        className="h-6 w-12 rounded-full bg-theme-toggler-light dark:bg-gradient-to-r dark:from-theme-toggler-dark-1 dark:to-theme-toggler-dark-2"
        onClick={() => handleThemeChange()}
      >
        <div className="size-[1.125rem] rounded-full duration-300 ease-out transition-transform bg-main-light-background-top translate-x-[1.7rem] dark:bg-main-dark-background-top dark:translate-x-[0.2rem]"></div>
      </button>
    </section>
  );
}
