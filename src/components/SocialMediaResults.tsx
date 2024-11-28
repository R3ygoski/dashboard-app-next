import { IRegistered } from "@/data/socialMediaData";
import Image from "next/image";

import { resultIcon } from "@/data/iconsData";

export default function SocialMediaResults({
  type,
  quantity,
  message,
}: IRegistered) {
  return (
    <p
      className={`
        flex items-center gap-x-2 font-bold text-[0.75rem] transition-colors duration-300
        group-hover:text-main-light-background-top
        ${type === "positive" ? "text-results-up" : "text-results-down"}
    `}
    >
      <Image src={resultIcon[type]} alt="" width={12} height={12} />
      {quantity} {message}
    </p>
  );
}
