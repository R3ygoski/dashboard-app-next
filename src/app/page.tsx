import OverviewCard from "@/components/OverviewCard";
import SocialMediaCard from "@/components/SocialMediaCard";
import ThemeToggler from "@/components/ThemeToggler";
import { overviewData } from "@/data/overviewData";
import { socialMediaData } from "@/data/socialMediaData";

export default function Home() {
  return (
    <main className="px-6 py-8 xl:py-9 xl:px-[10.5rem] xl:flex xl:flex-col xl:items-center">
      <header className="xl:flex xl:justify-between xl:items-center xl:min-w-[1104px]">
        <div>
          <h1 className="text-2xl font-bold text-main-light-strong-text dark:text-main-dark-strong-text xl:text-[1.725rem]">
            Social Media Dashboard
          </h1>
          <p className="my-1 text-sm font-bold text-main-light-text dark:text-main-dark-text">
            Total Followers: 23,004
          </p>
        </div>
        <div className="h-[1px] w-full mt-6 bg-main-light-text dark:bg-main-dark-text xl:hidden"></div>
        <ThemeToggler />
      </header>
      <section className="flex flex-col gap-6 w-full mt-8 py-2 sm:grid sm:grid-cols-2 xl:grid-cols-4 xl:max-w-[1104px]">
        {socialMediaData.map((card, idx) => {
          return (
            <SocialMediaCard
              key={idx}
              socialMedia={card.socialMedia}
              username={card.username}
              followers={card.followers}
              registered={card.registered}
            />
          );
        })}
      </section>
      <h2 className="mt-8 font-bold text-2xl text-main-light-strong-text dark:text-main-dark-strong-text xl:min-w-[1104px]">
        Overview - Today
      </h2>
      <ul className="flex flex-col pt-7 gap-3 sm:grid sm:grid-cols-3 xl:grid-cols-4 xl:gap-y-4 xl:gap-x-8 xl:max-w-[1104px]">
        {overviewData.map((card, idx) => {
          return (
            <OverviewCard
              key={idx}
              socialMedia={card.socialMedia}
              metric={card.metric}
              interactions={card.interactions}
              registered={card.registered}
            />
          );
        })}
      </ul>
    </main>
  );
}
