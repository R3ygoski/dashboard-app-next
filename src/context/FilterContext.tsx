"use client";
import { IOverviewData, overviewData } from "@/data/overviewData";
import {
  FlowType,
  ISocialMediaData,
  socialMediaData,
} from "@/data/socialMediaData";
import { ReactNode, createContext, useState } from "react";

interface IFilterContext {
  socialMediaList: ISocialMediaData[];
  overviewSocialMediaList: IOverviewData[];
  changeFilter: (filterType: FlowType | null) => void;
}

const FilterContext = createContext({} as IFilterContext);

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [socialMediaList, setSocialMediaList] =
    useState<ISocialMediaData[]>(socialMediaData);
  const [overviewSocialMediaList, setOverviewSocialMediaList] =
    useState<IOverviewData[]>(overviewData);

  const changeFilter = (filterType: FlowType | null) => {
    if (!filterType) {
      setSocialMediaList(socialMediaData);
      setOverviewSocialMediaList(overviewData);
      return;
    }
    const filteredList = socialMediaData.filter((socialMediaCard) => {
      return socialMediaCard.registered.type === filterType;
    });
    const filteredOverview = overviewData.filter((overviewCard) => {
      return overviewCard.registered.type === filterType;
    });
    setSocialMediaList(filteredList);
    setOverviewSocialMediaList(filteredOverview);
  };

  return (
    <FilterContext.Provider
      value={{ socialMediaList, overviewSocialMediaList, changeFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
