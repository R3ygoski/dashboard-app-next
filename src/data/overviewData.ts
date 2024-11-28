import { SocialMediaType, IRegistered } from "./socialMediaData";

type MetricType =
  | "Page Views"
  | "Likes"
  | "Profile Views"
  | "Retweets"
  | "Total Views";

export interface IOverviewData {
  metric: MetricType;
  socialMedia: SocialMediaType;
  registered: IRegistered;
  interactions: string;
}

export const overviewData: IOverviewData[] = [
  {
    socialMedia: "facebook",
    metric: "Page Views",
    registered: {
      quantity: 3,
      type: "positive",
    },
    interactions: "87",
  },
  {
    socialMedia: "facebook",
    metric: "Likes",
    registered: {
      quantity: 2,
      type: "negative",
    },
    interactions: "52",
  },
  {
    socialMedia: "instagram",
    metric: "Likes",
    registered: {
      quantity: 2257,
      type: "positive",
    },
    interactions: "5462",
  },
  {
    socialMedia: "instagram",
    metric: "Profile Views",
    registered: {
      quantity: 1375,
      type: "positive",
    },
    interactions: "52k",
  },
  {
    socialMedia: "twitter",
    metric: "Retweets",
    registered: {
      quantity: 303,
      type: "positive",
    },
    interactions: "117",
  },
  {
    socialMedia: "twitter",
    metric: "Likes",
    registered: {
      quantity: 553,
      type: "positive",
    },
    interactions: "507",
  },
  {
    socialMedia: "youtube",
    metric: "Likes",
    registered: {
      quantity: 19,
      type: "positive",
    },
    interactions: "107",
  },
  {
    socialMedia: "youtube",
    metric: "Total Views",
    registered: {
      quantity: 12,
      type: "positive",
    },
    interactions: "1407",
  },
];
