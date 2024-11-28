"use client";
import { SocialMediaType } from "@/data/socialMediaData";
import { createContext, ReactNode, useState } from "react";

type SelectedCardTypes = SocialMediaType;

interface ICardContext {
  selectedCard?: SelectedCardTypes;
  setCard: (socialMedia: SocialMediaType | undefined) => void;
}

const CardContext = createContext({} as ICardContext);

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCard, setSelectedCard] = useState<
    SocialMediaType | undefined
  >();

  const setCard = (socialMedia: SocialMediaType | undefined) => {
    if (selectedCard === socialMedia) {
      setSelectedCard(undefined);
    } else {
      setSelectedCard(socialMedia);
    }
  };

  return (
    <CardContext.Provider value={{ selectedCard, setCard }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
