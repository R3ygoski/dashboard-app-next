"use client";

import { socialMediaIcons } from "@/data/iconsData";
import { ISocialMediaData } from "@/data/socialMediaData";
import Image from "next/image";
import SocialMediaResults from "./SocialMediaResults";
import { useContext } from "react";
import { CardContext } from "@/context/CardContext";

interface ISocialMediaCardsProps extends ISocialMediaData {
  animationDelay: number;
}

export default function SocialMediaCard({
  socialMedia,
  username,
  followers,
  registered,
  animationDelay,
}: ISocialMediaCardsProps) {
  const { setCard } = useContext(CardContext);

  let border: string = "";
  let subscription: string = "";

  switch (socialMedia) {
    case "facebook":
      border = "after:bg-social-media-facebook";
      break;
    case "twitter":
      border = "after:bg-social-media-twitter";
      break;
    case "instagram":
      border =
        "after:bg-gradient-to-r after:from-social-media-instagram-1 after:to-social-media-instagram-2";
      break;
    case "youtube":
      border = "after:bg-social-media-youtube";
      break;
    default:
      border = "after:bg-white";
      break;
  }

  switch (socialMedia) {
    case "youtube":
      subscription = "subscribers";
      break;
    default:
      subscription = "followers";
      break;
  }

  return (
    <article
      style={{ animationDuration: `${animationDelay * 0.2}s` }}
      className={`
        flex flex-col items-center relative h-[13.5rem] pt-6 border-t-4 rounded-b-lg gap-y-2 bg-main-light-card shadow-md cursor-pointer duration-150
        after:block after:absolute after:-top-2 after:w-full after:h-2 after:rounded-t-lg
        dark:bg-main-dark-card
        hover:brightness-90
        xl:animate-up-to-down
        ${border}
        ${
          registered.type === "positive"
            ? "hover:shadow-results-up/25"
            : "hover:shadow-results-down/25"
        }
      `}
      onClick={() => {
        setCard(socialMedia);
      }}
    >
      <div className="flex items-center gap-x-2">
        <Image
          src={socialMediaIcons[socialMedia]}
          alt=""
          width={24}
          height={24}
        />
        <p className="text-sm text-main-light-strong-text dark:text-main-dark-strong-text">
          {username}
        </p>
      </div>
      <p className="text-main-light-strong-text font-bold text-[3.5rem] dark:text-main-dark-strong-text">
        {followers}
      </p>
      <p className="-mt-4 tracking-[0.15em] text-base text-main-light-text uppercase dark:text-main-dark-text">
        {subscription}
      </p>
      <SocialMediaResults
        type={registered.type}
        quantity={registered.quantity}
        message="Today"
      />
    </article>
  );
}
