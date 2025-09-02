import RecentProduct from "@/components/sections/recent/RecentProduct";
import Hero from "./_components/Hero/Hero";
import SectionOne from "./_components/Section/SectionOne";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <SectionOne/>
        <div className="min-h-96"></div>
        <RecentProduct />
        <div className="min-h-96"></div>
      </div>
    </>
  );
}
