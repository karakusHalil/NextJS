"use client";

import Hero from "./components/Hero";
import LoginButton from "./components/LoginButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col w-full h-full items-center justify-center">
        <Hero
          imageUrl="/slider/HondaCivic.jpg"
          imageUrl2="/slider/VISHEL.png"
          title="Welcome to Our Website"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
        ullam?"
        ></Hero>
        <LoginButton
          fullWidth
          onClick={() => router.push("/blog")}
          type="submit"
        >
          Test Button
        </LoginButton>
      </div>
    </>
  );
}
