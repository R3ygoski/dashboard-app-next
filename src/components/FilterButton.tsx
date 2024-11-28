"use client";
import Image from "next/image";

import { resultIcon } from "@/data/iconsData";
import { useContext } from "react";
import { FilterContext } from "@/context/FilterContext";

export default function FilterButton() {
  const { changeFilter } = useContext(FilterContext);

  return (
    <div className="flex absolute -bottom-28 right-0 gap-4 xl:flex-col xl:-left-12 xl:-bottom-48">
      <button
        className="flex justify-center items-center size-8 rounded-full gap-x-2 bg-results-up/50 dark:bg-results-up/25"
        onClick={() => {
          changeFilter("positive");
        }}
      >
        <Image src={resultIcon.positive} alt="" width={16} height={16} />
      </button>
      <button
        className="flex justify-center items-center size-8 rounded-full gap-x-2 font-bold text-gray-100 bg-gray-400/50 dark:bg-gray-400/25"
        onClick={() => {
          changeFilter(null);
        }}
      >
        X
      </button>
      <button
        className="flex justify-center items-center size-8 rounded-full gap-x-2 bg-results-down/50 dark:bg-results-down/25"
        onClick={() => {
          changeFilter("negative");
        }}
      >
        <Image src={resultIcon.negative} alt="" width={16} height={16} />
      </button>
    </div>
  );
}
