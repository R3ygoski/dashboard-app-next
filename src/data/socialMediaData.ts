export type SocialMediaType = "facebook" | "twitter" | "instagram" | "youtube";
type FlowType = "positive" | "negative";

export interface IRegistered {
  quantity: number;
  type: FlowType;
  message?: string;
}

export interface ISocialMediaData {
  socialMedia: SocialMediaType;
  username: string;
  followers: string;
  registered: IRegistered;
}

export const socialMediaData: ISocialMediaData[] = [
  {
    socialMedia: "facebook",
    username: "@nathanf",
    followers: "1987",
    registered: {
      quantity: 12,
      type: "positive",
    },
  },
  {
    socialMedia: "twitter",
    username: "@nathanf",
    followers: "1044",
    registered: {
      quantity: 99,
      type: "positive",
    },
  },
  {
    socialMedia: "instagram",
    username: "@realnathanf",
    followers: "11k",
    registered: {
      quantity: 1099,
      type: "positive",
    },
  },
  {
    socialMedia: "youtube",
    username: "Nathan F.",
    followers: "8239",
    registered: {
      quantity: 144,
      type: "negative",
    },
  },
];
