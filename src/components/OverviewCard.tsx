"use client";
import Image from "next/image";
import { IOverviewData } from "@/data/overviewData";
import { socialMediaIcons } from "@/data/iconsData";
import SocialMediaResults from "./SocialMediaResults";
import { useContext } from "react";
import { CardContext } from "@/context/CardContext";

interface IOverviewCardProps extends IOverviewData {
  animationDuration: number;
}

export default function OverviewCard({
  socialMedia,
  registered,
  interactions,
  metric,
  animationDuration,
}: IOverviewCardProps) {
  const { selectedCard, setCard } = useContext(CardContext);

  return (
    <li
      style={{ animationDuration: `${animationDuration * 0.125}s` }}
      className={`
        flex flex-col justify-between h-32 p-6 pt-7 pb-5 rounded-lg bg-main-light-card cursor-pointer shadow-lg
        dark:bg-main-dark-card
        hover:brightness-90
        lg:w-full 
        xl:w-64 xl:animate-down-to-up
        ${
          registered.type === "positive"
            ? "hover:shadow-results-up/25"
            : "hover:shadow-results-down/25"
        }
        ${
          selectedCard === socialMedia
            ? `shadow-xl ${
                registered.type === "positive"
                  ? "md:shadow-results-up/25"
                  : "md:shadow-results-down/25"
              }`
            : ""
        }
      `}
      onClick={() => {
        setCard(undefined);
      }}
    >
      <header className="flex justify-between">
        <p className="font-bold text-sm text-main-light-text dark:text-main-dark-text">
          {metric}
        </p>
        <Image
          src={socialMediaIcons[socialMedia]}
          alt=""
          width={20}
          height={20}
        />
      </header>

      <div className="flex justify-between">
        <p className="font-bold text-3xl text-main-light-strong-text dark:text-main-dark-strong-text">
          {interactions}
        </p>
        <SocialMediaResults
          type={registered.type}
          quantity={registered.quantity}
          message="%"
        />
      </div>
    </li>
  );
}
