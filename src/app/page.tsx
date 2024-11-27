import SocialMediaCard from "@/components/SocialMediaCard";
import ThemeToggler from "@/components/ThemeToggler";
import { socialMediaData } from "@/data/socialMediaData";

export default function Home() {
  return (
    <main className="px-6 py-8">
      <section>
        <h1 className="text-2xl font-bold text-main-light-strong-text dark:text-main-dark-strong-text">
          Social Media Dashboard
        </h1>
        <p className="my-1 text-sm font-bold text-main-light-text dark:text-main-dark-text">
          Total Followers: 23,004
        </p>
        <div className="h-[1px] w-full mt-6 bg-main-light-text dark:bg-main-dark-text"></div>
      </section>
      <ThemeToggler />
      <section className="flex flex-col gap-6 w-full mt-8 py-2">
        {socialMediaData.map((card,idx)=>{
          return <SocialMediaCard key={idx} socialMedia={card.socialMedia} username={card.username} followers={card.followers} registered={card.registered}/>
        })}
      </section>
    </main>
  );
}
