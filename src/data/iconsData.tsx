import FacebookIcon from "@/icons/icon-facebook.svg";
import TwitterIcon from "@/icons/icon-twitter.svg";
import InstagramIcon from "@/icons/icon-instagram.svg";
import YoutubeIcon from "@/icons/icon-youtube.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import PositiveIcon from "@/icons/icon-up.svg";
import NegativeIcon from "@/icons/icon-down.svg";

interface IIcons {
  [key: string]: StaticImport;
}

export const socialMediaIcons: IIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

export const resultIcon: IIcons = {
  positive: PositiveIcon,
  negative: NegativeIcon,
};
