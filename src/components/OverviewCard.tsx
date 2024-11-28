import Image from "next/image";
import { IOverviewData } from "@/data/overviewData";
import { socialMediaIcons } from "@/data/iconsData";
import SocialMediaResults from "./SocialMediaResults";

export default function OverviewCard({
  socialMedia,
  registered,
  interactions,
  metric,
}: IOverviewData) {
  return (
    <li className="flex flex-col justify-between h-32 p-6 pt-7 pb-5 rounded-lg bg-main-light-card dark:bg-main-dark-card">
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
